import { AppProps } from "next/app"
import { NextPage } from "next/types"
import { ReactElement, ReactNode } from "react"

// credits: https://github.com/vercel/next.js/discussions/31775

// type for pages to use when using custom page-specific layout
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

// type for _app.tsx to use when using layout
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}