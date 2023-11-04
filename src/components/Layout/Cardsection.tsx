type Card = {
    image:string;
    btn: string
}
const card : Card[] =[
    {
        image:'https://media.istockphoto.com/id/822557072/photo/woman-with-eyeglasses-using-laptop-at-home.webp?b=1&s=170667a&w=0&k=20&c=zMl7yZU1CPGXVdZ0YcB9O9ja6EXRg1HUIzFulrJDaU4=',
        btn: 'PTE Mock Test'
    },
    {
        image:'https://media.istockphoto.com/id/1139791063/photo/smiling-asian-girl-student-study-in-library-with-laptop-books.webp?b=1&s=170667a&w=0&k=20&c=5HSnGXvnB-Z92F-Fj5xby0EAj2yNujq2JX-pdElYcSM=',
        btn: 'IELTS Mock Test'
    }
]
const Cardsection = () => {
    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto w-9/12 px-6 lg:px-8 flex flex-wrap justify-around">
                {card.map((item, i) => (
                <div className="m-2 bg-white w-auto h-auto px-2 py-3 shadow-sm">
                    <img src={item.image}
                        alt=""
                        className="mx-3 my-3 w-72 rounded" />
                    <div className="flex justify-center py-10">
                            <button className="bg-orange-400 mx-auto px-8 py-2 rounded-full text-white font-semibold w-4/6">
                            {item.btn}
                            </button>
                    </div>
                </div>
                ))}
            </div>
        </section >
    )
}

export default Cardsection