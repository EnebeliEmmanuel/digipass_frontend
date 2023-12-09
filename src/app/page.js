import HomePage from './components/Home';
import { Montserrat } from "next/font/google"


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat"
});

export default function Home() {

  return (
    <main className={montserrat.className}>
        <HomePage />
    </main>
  )
}
