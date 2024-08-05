import pic2 from '../../../public/pic2.jpg'
import pic3 from '../../../public/pic3.jpg'
export const AboutTheApp = () => {
    return(
        <div >
            <div className="flex flex-col items-center justify-center space-y-20 mt-20">

                <div className='flex sm:flex-col sm:text-center sm:space-x-0 space-x-14'>
                <img src={pic2} alt="worker pic" className='rounded-lg w-full'/>
                <div className='flex sm:flex-col sm:w-full sm:h-full flex-wrap h-24 w-96'>
                    <h1 className='text-4xl'>Quem nós somos?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iste eligendi modi, asperiores nam hic 
                        sapiente totam, quo doloribus rerum fugit labore quia quas quidem sit a esse accusantium delectus.</p>
                </div>
                </div>

                
                <div className='flex sm:flex-col-reverse sm:text-center sm:space-x-0 space-x-14'>
                <div className='flex sm:flex-col sm:w-full sm:h-full flex-wrap h-24 w-96'>
                    <h1 className='text-4xl'>Que é a app Biscato?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iste eligendi modi, asperiores nam hic 
                        sapiente totam, quo doloribus rerum fugit labore quia quas quidem sit a esse accusantium delectus.</p>
                </div>
                <img src={pic3} alt="worker pic" className='rounded-lg w-full'/>
                </div>

                <div className='flex flex-col space-y-7 text-center'>
                    <img src={pic3} alt="worker pic" className='rounded-lg'/>
                <div className='flex flex-wrap  h-24 w-96'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iste eligendi modi, asperiores nam hic 
                        sapiente totam, quo doloribus rerum fugit labore quia quas quidem sit a esse accusantium delectus.</p>
                </div>
                
                </div>

                <div className='flex flex-col space-y-7 text-center'>
                    <img src={pic3} alt="worker pic" className='rounded-lg'/>
                <div className='flex flex-wrap  h-24 w-96'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iste eligendi modi, asperiores nam hic 
                        sapiente totam, quo doloribus rerum fugit labore quia quas quidem sit a esse accusantium delectus.</p>
                </div>
                
                </div>


            </div>
        </div>
    );
}