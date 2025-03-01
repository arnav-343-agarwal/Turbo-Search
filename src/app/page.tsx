'use client'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { useEffect, useState } from 'react'

export default function Home() {
  const [input, setInput] = useState<string>('')
  const [searchResults, setSearchResults] = useState<{
    results: string[]
    duration: number
  }>()

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearchResults(undefined)

      const res = await fetch(`https://turbosearch.turbosearch.workers.dev/api/search?q=${input}`)
      const data = (await res.json()) as { results: string[]; duration: number }
      setSearchResults(data)
    }

    fetchData()
  }, [input])

  return (
    <main className='h-screen w-screen grainy'>
      <nav className='w-full px-6 py-4 flex items-center justify-between bg-white shadow-md'>
        <h1 className='text-2xl font-bold text-gray-900'>TurboSearch ⚡</h1>
        <div className='flex gap-6 text-gray-700 text-lg'>
          <a href='https://hono.dev/' target='_blank' className='hover:text-blue-600'>Hono</a>
          <a href='https://redis.io/' target='_blank' className='hover:text-red-600'>Redis</a>
          <a href='https://www.cloudflare.com/' target='_blank' className='hover:text-yellow-600'>Cloudflare</a>
          <a href='https://nextjs.org/' target='_blank' className='hover:text-black'>Next.js</a>
        </div>
      </nav>
      <div className='flex flex-col gap-6 items-center pt-32 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5'>
        <h1 className='text-5xl tracking-tight font-bold'>TurboSearch⚡</h1>
        <p className='text-zinc-600 text-lg max-w-prose text-center'>
          Experience lightning-fast search powered by Hono, Next.js, and Cloudflare. <br />
          Just type below your query and get instant results.
        </p>

        <div className='max-w-md w-full'>
          <Command>
            <CommandInput
              value={input}
              onValueChange={setInput}
              placeholder='Search countries...'
              className='placeholder:text-zinc-500'
            />
            <CommandList>
              {searchResults?.results.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : null}

              {searchResults?.results ? (
                <CommandGroup heading='Results'>
                  {searchResults?.results.map((result) => (
                    <CommandItem
                      key={result}
                      value={result}
                      onSelect={setInput}>
                      {result}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}

              {searchResults?.results ? (
                <>
                  <div className='h-px w-full bg-zinc-200' />

                  <p className='p-2 text-xs text-zinc-500'>
                    Found {searchResults.results.length} results in{' '}
                    {searchResults?.duration.toFixed(0)}ms
                  </p>
                </>
              ) : null}
            </CommandList>
          </Command>
        </div>
      </div>
    </main>
  )
}