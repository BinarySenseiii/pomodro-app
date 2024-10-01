'use client'
import { useEffect } from 'react'
import { Frown } from 'lucide-react'
import Link from 'next/link'

import { getBackgroundPattern } from '~/core/components/bg-patterns'
import { Button } from '~/core/components/design-system/button'
import { makeUrlsExternal } from '~/core/helpers'

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & {
    digest?: string
  }
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative grid min-h-dvh place-content-center">
      {getBackgroundPattern('bg-light-grid-1')}

      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <Frown className="size-16 text-gray-600" />
          <h1 className="mt-4 text-balance text-3xl font-black italic">
            {error?.name
              ? error.name.replace(/([a-z])([A-Z])/g, '$1 $2')
              : 'Internal Server Error!'}
          </h1>
          <p className="mx-auto my-4 max-w-xl text-center text-base">
            Oops! Something went wrong{' '}
            <strong
              dangerouslySetInnerHTML={{
                __html: makeUrlsExternal(error.message),
              }}
            />
            It looks like there is an issue with the API request, or a variable
            might not be properly defined. Please check your code or try again
            later .
          </p>

          <div className="flex items-center gap-4">
            <Button onClick={() => reset()}>
              <span className="text-xs md:text-base">Try again</span>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/">
                <span className="text-xs md:text-base">Back to home</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
