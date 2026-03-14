import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '../src/app/components/Navigation'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'SCIENTIZED SCIENCE SEARCH',
  description: 'Witryna internetowa czasopisma naukowego',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-primary)] transition-colors duration-500`}>
        
        {/* NASZ KOMPONENT NAWIGACJI (Z WYSZUKIWARKĄ I MOTYWEM) */}
        <Navigation />

        {/* DYNAMICZNA TREŚĆ PODSTRON */}
        <main className="flex-grow w-full flex flex-col items-center pb-20">
          {children}
        </main>

        {/* GLOBALNY FOOTER Z MIEJSCEM NA ILUSTRACJĘ */}
        <footer className="w-full relative flex flex-col mt-32 text-[var(--color-bg)] bg-[var(--color-primary)] transition-colors duration-500">
          
          {/* DIV NA ILUSTRACJĘ (Podmień backgroundImage na swoją wyciętą z Figmy grafikę) */}
          <div 
            className="absolute top-0 left-0 w-full transform -translate-y-[99%] h-[400px] bg-bottom bg-no-repeat bg-contain pointer-events-none"
            style={{ backgroundImage: "url('/twoja-ilustracja-z-figmy.png')" }}
          >
             {/* Awaryjne, wektorowe wzniesienia z "ziemią", jeśli obrazka jeszcze nie ma */}
             <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24 fill-current text-[var(--color-primary)] transition-colors duration-500">
               <path d="M0,100 L0,40 L30,45 L60,30 L90,55 L130,20 L180,60 L230,35 L280,70 L340,25 L400,65 L460,40 L520,80 L580,30 L650,75 L720,45 L800,85 L880,50 L950,90 L1000,60 L1000,100 Z" />
             </svg>
          </div>

          <div className="container mx-auto max-w-6xl px-8 py-16 flex flex-col gap-24 relative z-10">
            {/* LOGO W STOPCE */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[0.85] mix-blend-screen opacity-90">
                SCIENTIZED<br/>
                <span className="ml-8">SCIENCE</span><br/>
                <span className="ml-16">SEARCH</span>
              </h2>
            </div>

            {/* NEWSLETTER I LINKI */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              
              <div className="flex flex-col gap-12 w-full md:w-1/2">
                <div className="flex flex-col sm:flex-row gap-6 sm:items-end">
                  <div className="flex-1 border-b border-[var(--color-bg)] pb-2 flex flex-col">
                    <label className="text-[9px] tracking-[0.2em] uppercase font-medium mb-4 opacity-80">Enter Email</label>
                    <input type="email" className="bg-transparent outline-none text-xs tracking-widest uppercase w-full placeholder:text-white/50" />
                  </div>
                  <button className="relative inline-flex items-center justify-center w-32 h-10 text-[9px] tracking-[0.2em] uppercase font-medium group hover:opacity-70 transition-opacity">
                    <svg className="absolute inset-0 w-full h-full text-[var(--color-bg)]" preserveAspectRatio="none" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 5 0 L 95 0 A 5 5 0 0 0 100 5 L 100 25 A 5 5 0 0 0 95 30 L 5 30 A 5 5 0 0 0 0 25 L 0 5 A 5 5 0 0 0 5 0 Z" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    Subscribe
                  </button>
                </div>
                
                <div className="text-[10px] tracking-wider opacity-70 flex flex-col gap-1 mt-4">
                  <span className="font-serif italic text-lg opacity-100">Scientized Science Search</span>
                  <span>© All rights reserved {new Date().getFullYear()}</span>
                  <span>ISSN: 1234-5678</span> {/*  Numer włączony do stopki zgodnie z dokumentem */}
                </div>
              </div>

              <div className="flex flex-wrap gap-16 text-[9px] tracking-[0.2em] uppercase font-medium">
                <div className="flex flex-col gap-6">
                   <div className="relative inline-flex items-center justify-center w-16 h-8 text-[var(--color-bg)]">
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 5 0 L 95 0 A 5 5 0 0 0 100 5 L 100 25 A 5 5 0 0 0 95 30 L 5 30 A 5 5 0 0 0 0 25 L 0 5 A 5 5 0 0 0 5 0 Z" stroke="currentColor" strokeWidth="1" />
                      </svg>
                      <span className="z-10">FAQ</span>
                   </div>
                   <Link href="/latest" className="hover:opacity-70">Articles</Link>
                   <Link href="/editorial-board" className="hover:opacity-70">Team</Link>
                   <Link href="/about" className="hover:opacity-70">About</Link>
                   <Link href="/review-process" className="hover:opacity-70">Review Process</Link>
                   <Link href="/contact" className="hover:opacity-70">Contact</Link>
                </div>

                <div className="flex flex-col gap-16 justify-between">
                   <span className="opacity-70 lowercase tracking-normal text-xs text-right">Publishing worldwide<br/>from Poland</span>
                   <div className="flex flex-col gap-4 text-right items-end">
                     <span className="opacity-70">Socials:</span>
                     <div className="flex gap-4">
                       <Link href="#" className="hover:opacity-70">X</Link>
                       <Link href="#" className="hover:opacity-70">IG</Link>
                       <Link href="#" className="hover:opacity-70">IN</Link>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}