// NOTE: 以下の記事を参考に実装
// see: https://zenn.dev/collabostyle/articles/8e8d76d5611f7e
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ChakraProvider cssVarsRoot='body'>{children}</ChakraProvider>
      </body>
    </html>
  )
}
