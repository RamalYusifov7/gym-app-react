import { useState } from "react"

export const usePaginate = ({ data, perPage }) => {
    const numOfPages = Math.ceil(data?.length / perPage)
    const [currentPage, setCurrentPage] = useState(1)
    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: 900, behavior: 'smooth' });
    }
    const indexOfLastExercise = currentPage * perPage;
    const indexOfFirstExercise = indexOfLastExercise - perPage;
    const currentExercises = data?.slice(indexOfFirstExercise, indexOfLastExercise);

    
    return { numOfPages, currentPage, paginate, currentExercises }
}