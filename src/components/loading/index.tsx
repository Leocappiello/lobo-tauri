export const Loading = () => {
    return(
        <div className="size-full h-lvh flex justify-center items-center flex-col">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-300"></div>
            <p className="mt-3 text-gray-500">Cargando</p>
        </div>
    )
}