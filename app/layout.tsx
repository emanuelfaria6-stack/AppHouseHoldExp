import './globals.css'
import type { ReactNode } from 'react'
export const metadata={title:'Despesas AI',description:'Gestão pessoal de despesas com OCR e IA'}
export default function RootLayout({children}:{children:ReactNode}){return <html lang="pt-PT"><body>{children}</body></html>}
