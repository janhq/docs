import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

import * as Tooltip from '@radix-ui/react-tooltip'

function generateDatesArray(startDate: Date, numDays: number) {
  let datesArray = []
  let currentDate = new Date(startDate)

  for (let i = 0; i < numDays; i++) {
    datesArray.push(format(new Date(currentDate), 'MM-dd-yyyy'))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return datesArray
}

async function fetchDataForDate(date: string) {
  const response = await fetch(
    `https://delta.jan.ai/openai-api-collection-test/${date}.json`
  )
  if (!response.ok) {
    return {}
  }
  const data = await response.json()
  return data
}

function flattenAndRemoveDuplicates<T>(nestedArray: (T[] | undefined)[]): T[] {
  const flattenedArray: T[] = []

  for (const subArray of nestedArray) {
    if (subArray) {
      for (const item of subArray) {
        flattenedArray.push(item)
      }
    }
  }

  const seen = new Set<T>()
  const uniqueArray: T[] = []

  for (const item of flattenedArray) {
    if (!seen.has(item)) {
      seen.add(item)
      uniqueArray.push(item)
    }
  }

  return uniqueArray
}

export default function OAICoverage() {
  const datesArray = generateDatesArray(new Date('05-19-2024'), 20)
  const [data, setData] = useState([])

  async function fetchAllData(datesArray: string[]) {
    let results = []

    for (let date of datesArray) {
      try {
        let data = await fetchDataForDate(date)
        results.push({ date: date, ...data })
      } catch (error) {
        results.push({ date: date })
      }
    }
    return results
  }

  useEffect(() => {
    if (data.length === 0) {
      fetchAllData(datesArray).then((results) => {
        setData(results as any)
      })
    }
  }, [data.length, datesArray])

  const attributeValue = data.map((x: any) =>
    x.content?.result.map((c: any) => c.attributeValue)
  )

  const generateBlock = (y: any, x: any) => {
    const block = y.content?.result.filter(
      (c: any) => c.attributeValue === x
    )[0]

    if (block?.passingRate === 100)
      return (
        <>
          <Tooltip.Trigger asChild>
            <div className="w-5 h-5 bg-green-600 border border-green-400 cursor-pointer" />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="dark:text-black text-white select-none rounded-lg bg-black dark:bg-white px-3 py-2 text-sm leading-none will-change-[transform,opacity]"
              sideOffset={5}
            >
              {block?.total || 0}
              <Tooltip.Arrow className="fill-black dark:fill-white" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </>
      )
    if (block?.passingRate === 0)
      return (
        <>
          <Tooltip.Trigger asChild>
            <div className="w-5 h-5 bg-red-800 border border-red-600 cursor-pointer" />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="dark:text-black text-white select-none rounded-lg bg-black dark:bg-white px-3 py-2 text-sm leading-none will-change-[transform,opacity]"
              sideOffset={5}
            >
              {block?.total || 0}
              <Tooltip.Arrow className="fill-black dark:fill-white" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </>
      )
    if (block?.passingRate === undefined)
      return (
        <>
          <Tooltip.Trigger asChild>
            <div className="w-5 h-5 bg-gray-200 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 cursor-pointer" />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="dark:text-black text-white select-none rounded-lg bg-black dark:bg-white px-3 py-2 text-sm leading-none will-change-[transform,opacity]"
              sideOffset={5}
            >
              {block?.total || 0}
              <Tooltip.Arrow className="fill-black dark:fill-white" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </>
      )

    return (
      <>
        <Tooltip.Trigger asChild>
          <div className="w-5 h-5 bg-red-300 dark:bg-red-200 border border-red-100 dark:border-red-50 cursor-pointer" />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="dark:text-black text-white select-none rounded-lg bg-black dark:bg-white px-3 py-2 text-sm leading-none will-change-[transform,opacity]"
            sideOffset={5}
          >
            {block?.total || 0}
            <Tooltip.Arrow className="fill-black dark:fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </>
    )
  }

  return (
    <div className="my-4 w-full h-full overflow-x-auto">
      {/* Column */}
      <div className="flex space-x-1 justify-end items-center">
        {data.map((x: any, i) => {
          return (
            <div key={i} className="w-5 h-5 flex items-center justify-center">
              <p className="text-xs">{x.date.split('-')[1]}</p>
            </div>
          )
        })}
      </div>

      {/* Row */}
      {flattenAndRemoveDuplicates<string>(attributeValue).map((x, i) => {
        return (
          <div
            key={i}
            className="flex justify-end gap-1 space-y-1 items-center"
          >
            <p className="text-xs mr-2 line-clamp-1" title={x}>
              {x}
            </p>
            <div className="flex gap-1">
              {data.map((y: any, i) => {
                return (
                  <Tooltip.Provider key={i}>
                    <Tooltip.Root>{generateBlock(y, x)}</Tooltip.Root>
                  </Tooltip.Provider>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
