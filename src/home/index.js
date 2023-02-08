import Layout from '../layout'
import { useState, useEffect } from 'react'

export default function Home() {
    const [pets, setPets] = useState([])

    useEffect(() => {
        async function getPets() {
            const res = await fetch("https://milliax.github.io/raw/web_dev/pets.json")
            const reponse = await res.json()

            console.log(reponse)
            setPets(reponse)
        }

        getPets()

    }, [])



    return (
        <Layout>
            <div className='grid grid-cols-2 gap-5 place-items-center py-5'>
                {pets.map((pet) => (
                    <div key={pet.name} className='bg-gray-100 hover:bg-gray-200 hover:shadow-lg h-32 w-44 pt-3 pb-1  flex flex-col justify-between'>

                        <div className='flex flex-row justify-center'>
                            <img src={pet.imageURL} className='w-20 h-20 object-cover rounded-full' />
                        </div> 

                        <div className='text-center' >
                            {pet.name} {pet.breed}
                        </div>
                    </div>
                ))}
            </div>
        </Layout >
    )

}
