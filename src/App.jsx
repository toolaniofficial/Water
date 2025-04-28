import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Todolist from './components/Todolist'
import Weather from './components/Weather'
import SimpleCalculator from './components/SimpleCalculator'
import QuizApp from './components/QuizApp'
import TipCalculator from './components/TipCalculator'
import DigitalClock from './components/DigitalClock'
import Stopwatch from './components/Stopwatch'
import NoteApp from './components/NoteApp'
import QuoteGenerator from './components/QuoteGenerator'
import CurrencyConverter from './components/CurrencyConverter'
import Recipe from './components/Recipe'
import MovieSearch from './components/MovieSearch'
import MusicPlayer from './components/MusicPlayer'
import ImageSlider from './components/ImageSlider'
import PasswordGenerator from './components/passwordGenerator'
import MarkdownPreviewer from './components/markdownPreviewer'
import GitUserFinder from './components/GitUserFinder'
import ExpenseTracker from './components/ExpenseTracker'
import EcommerceProductPage from './components/EcommerceProductPage'
import MultiForm from './components/MultiForm'
import DragAndDrop from './components/DragAndDrop'
import LightAndDarkmodeToggle from './components/LightAndDarkmodeToggle'
import ModalPop from './components/ModalPop'
import AnimatedLoadingScreen from './components/AnimatedLoadingScreen'
import ProgressBar from './components/ProgressBar'
import ResponsiveNavbar from './components/ResponsiveNavbar'
import FaqApp from './components/FaqApp'
import NotificationToast from './components/NotificationToast'
import StarRating from './components/StarRating'
import MemeGenerator from './components/MemeGenerator'
import TicTacToe from './components/TicTacToe'
import RockPaperScissorsGame from './components/RockPaperScissorsGame'
import MemoryMatchingGame from './components/MemoryMatchingGame'
import ColorPicker from './components/ColorPicker'
import DrawingCanvasApp from './components/DrawingCanvasApp'
import VirtualPetGame from './components/VirtualPetGame'
import MusicVisualizer from './components/MusicVisualizer'
import PomodoroTimer from './components/PomodoroTimer'
import TypingSpeedTest from './components/TypingSpeedTest'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Todolist />
      <Weather />
      <SimpleCalculator />
      <QuizApp />
      <TipCalculator />
      <DigitalClock />
      <Stopwatch />
      <NoteApp />
      <QuoteGenerator />
      <CurrencyConverter />
      <Recipe />
      <MovieSearch />
      <MusicPlayer />
      <ImageSlider />
      <PasswordGenerator />
      <MarkdownPreviewer />
      <GitUserFinder />
      <ExpenseTracker />
      <EcommerceProductPage />
      <MultiForm />
      <DragAndDrop />
      <LightAndDarkmodeToggle />
      <ModalPop />
      <AnimatedLoadingScreen />
      <ProgressBar />
      <ResponsiveNavbar />
      <FaqApp />
      <NotificationToast />
      <StarRating />
      <MemeGenerator />
      <TicTacToe />
      <RockPaperScissorsGame />
      <MemoryMatchingGame />
      <ColorPicker />
      <DrawingCanvasApp />
      <VirtualPetGame />
      <MusicVisualizer />
      <PomodoroTimer />
      <TypingSpeedTest />
    </>
  )
}

export default App
