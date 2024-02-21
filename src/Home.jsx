/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Loader from './Components/Loader'

const Home = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [showDestination, setShowDestination] = useState(false)
    const [activeTab, setActiveTab] = useState('')
    const [places, setPlaces] = useState([
        { img: '/malta.jpg', name: 'Malta', duration: '3-9 Feb', flight: '63', stay: '46', description: 'Valletta, ancient temples & beaches, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi reprehenderit ipsam temporibus consectetur. Velit, at amet eligendi deserunt temporibus, corporis labore dicta officia ipsam minus voluptatum? Totam facilis debitis molestias?' },
        { img: '/dublin.jpg', name: 'Dublin', duration: '3-10 Feb', flight: '31', stay: '100', description: 'A castle, mesuems & the book of Kells, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi reprehenderit ipsam temporibus consectetur. Velit, at amet eligendi deserunt temporibus, corporis labore dicta officia ipsam minus voluptatum? Totam facilis debitis molestias?' },
        { img: '/museum.jpg', name: 'Museum', duration: '3-8 Feb', flight: '26', stay: '56', description: 'Ancient currency & all, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi reprehenderit ipsam temporibus consectetur. Velit, at amet eligendi deserunt temporibus, corporis labore dicta officia ipsam minus voluptatum? Totam facilis debitis molestias?' },
        { img: '/hollyroodhouse.jpg', name: 'Hollyroodhouse', duration: '3-12 Feb', flight: '52', stay: '41', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi reprehenderit ipsam temporibus consectetur. Velit, at amet eligendi deserunt temporibus, corporis labore dicta officia ipsam minus voluptatum? Totam facilis debitis molestias?' },
    ])
    const [data, setData] = useState({
        img: '/malta.jpg', 
        name: 'Malta', 
        duration: '3-9 Feb', 
        flight: '63', 
        stay: '46', 
        description: 'Valletta, ancient temples & beaches, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi reprehenderit ipsam temporibus consectetur. Velit, at amet eligendi deserunt temporibus, corporis labore dicta officia ipsam minus voluptatum? Totam facilis debitis molestias?'
    })

    const handleTabChange = (tab) => {
        setActiveTab(tab)
        setShowDestination(true)
    }

    const handleChange = (img, name, duration, description, flight, stay) => {
        setIsLoading(true)
        setData({
            img: img, 
            name: name, 
            duration: duration, 
            flight: flight, 
            stay: stay, 
            description: description
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 shadow-custom py-2">
                        <div className='d-flex flex-wrap align-items-center justify-content-between'>
                            <div className='d-flex flex-wrap align-items-center gap-2'>
                                <i className="fa-solid fa-bars"></i>
                                <span>
                                    <span className='text-primary fs-4'>G</span>
                                    <span className='text-danger fs-4'>o</span>
                                    <span className='text-warning fs-4'>o</span>
                                    <span className='text-primary fs-4'>g</span>
                                    <span className='text-success fs-4'>l</span>
                                    <span className='text-danger fs-4'>e</span>
                                </span>
                                &nbsp;&nbsp;&nbsp;
                                <button type='button' className={`btn rounded-100px px-3 fw-bold ${activeTab == 'travel' ? 'text-primary active-btn-bg' : 'shadow-custom'}`} onClick={()=>handleTabChange('travel')}><i className="fa-solid fa-suitcase-rolling text-primary"></i>&nbsp;&nbsp;Travel</button>
                                <button type='button' className={`btn rounded-100px px-3 fw-bold ${activeTab == 'explore' ? 'text-primary active-btn-bg' : 'shadow-custom'}`} onClick={()=>handleTabChange('explore')}><i className="fa-solid fa-earth-americas text-primary"></i>&nbsp;&nbsp;Explore</button>
                                <button type='button' className='btn rounded-100px px-3 fw-bold shadow-custom'><i className="fa-solid fa-jet-fighter fa-rotate-by text-primary" style={{ '--fa-rotate-angle': '315deg' }}></i>&nbsp;&nbsp;Flights</button>
                                <button type='button' className='btn rounded-100px px-3 fw-bold shadow-custom'><i className="fa-solid fa-bed text-primary"></i>&nbsp;&nbsp;Hotels</button>
                                <button type='button' className='btn rounded-100px px-3 fw-bold shadow-custom'><i className="fa-solid fa-house-chimney text-primary"></i>&nbsp;&nbsp;Holiday rentals</button>
                            </div>
                            <div className='d-flex align-items-center' style={{ letterSpacing: '2.2px' }}>
                                <i className="fa-solid fa-ellipsis-vertical"></i><i className="fa-solid fa-ellipsis-vertical"></i><i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-md-2 p-0 fw-bold shadow-custom">
                        <div className='sideMenu'>
                            <div>
                                <div role='button' className={`${activeTab == 'travel' ? 'active-btn-bg rounded-tab' : ''} py-2 px-3`} onClick={()=>handleTabChange('travel')}>
                                    <div className={`d-flex align-items-center ${activeTab == 'travel' ? 'text-primary' : ''}`}>
                                        <div className='w-40px'><i className="fa-solid fa-suitcase-rolling"></i></div>
                                        <div>Travel</div>
                                    </div>
                                </div>
                                <div role='button' className={`${activeTab == 'explore' ? 'active-btn-bg rounded-tab' : ''} py-2 px-3`} onClick={()=>handleTabChange('explore')}>
                                    <div className={`d-flex align-items-center ${activeTab == 'explore' ? 'text-primary' : ''}`}>
                                        <div className='w-40px'><i className="fa-solid fa-earth-americas"></i></div>
                                        <div>Explore</div>
                                    </div>
                                </div>
                                <div role='button' className='py-2 px-3'>
                                    <div className='d-flex align-items-center'>
                                        <div className='w-40px'><i className="fa-solid fa-jet-fighter fa-rotate-by" style={{ '--fa-rotate-angle': '315deg' }}></i></div>
                                        <div>Flights</div>
                                    </div>
                                </div>
                                <div role='button' className='py-2 px-3'>
                                    <div className='d-flex align-items-center'>
                                        <div className='w-40px'><i className="fa-solid fa-bed"></i></div>
                                        <div>Hotels</div>
                                    </div>
                                </div>
                                <div role='button' className='py-2 px-3'>
                                    <div className='d-flex align-items-center'>
                                        <div className='w-40px'><i className="fa-solid fa-house-chimney"></i></div>
                                        <div>Holiday rentals</div>
                                    </div>
                                </div>
                                <div role='button' className='py-2 px-3'>
                                    <div className='d-flex align-items-center'>
                                        <div className='w-40px'><i className="fa-solid fa-chart-line"></i></div>
                                        <div>Tracked flight prices</div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-top border-secondary-subtle'>
                                <div role='button' className='py-2 px-3'>
                                    <div className='d-flex align-items-center'>
                                        <div className='w-40px'><i className="fa-solid fa-gear"></i></div>
                                        <div>Travel Settings</div>
                                    </div>
                                </div>
                                <div role='button' className='py-2 px-3'>
                                    <div className='d-flex align-items-center'>
                                        <div className='w-40px'><i className="fa-regular fa-message"></i></div>
                                        <div>Feedback</div>
                                    </div>
                                </div>
                                <div role='button' className='py-2 px-3'>
                                    <div className='d-flex align-items-center'>
                                        <div className='w-40px'><i className="fa-regular fa-circle-question"></i></div>
                                        <div>Help</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <img src="/banner.jpg" className='w-100' alt="/banner.jpg" />
                        <h1 className='text-center' style={{ marginTop: '-30px' }}>Travel</h1>
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <button type='button' className={`btn rounded-100px px-3 fw-bold ${activeTab == 'travel' ? 'text-primary active-btn-bg' : 'shadow-custom'}`} onClick={()=>handleTabChange('travel')}><i className="fa-solid fa-suitcase-rolling text-primary"></i>&nbsp;&nbsp;Travel</button>
                            <button type='button' className={`btn rounded-100px px-3 fw-bold ${activeTab == 'explore' ? 'text-primary active-btn-bg' : 'shadow-custom'}`} onClick={()=>handleTabChange('explore')}><i className="fa-solid fa-earth-americas text-primary"></i>&nbsp;&nbsp;Explore</button>
                            <button type='button' className='btn rounded-100px shadow-custom px-3 fw-bold'><i className="fa-solid fa-jet-fighter fa-rotate-by text-primary" style={{ '--fa-rotate-angle': '315deg' }}></i>&nbsp;&nbsp;Flights</button>
                            <button type='button' className='btn rounded-100px shadow-custom px-3 fw-bold'><i className="fa-solid fa-bed text-primary"></i>&nbsp;&nbsp;Hotels</button>
                            <button type='button' className='btn rounded-100px shadow-custom px-3 fw-bold'><i className="fa-solid fa-house-chimney text-primary"></i>&nbsp;&nbsp;Holiday rentals</button>
                        </div>
                        {
                            showDestination ?
                            <div className="w-90 m-auto mt-4">
                                <div className="row">
                                    <div className='fs-4'>Popular destination</div>
                                    <div className='text-secondary'>Based on your location in Edinburgh</div>
                                    <div className="col-md-6 mt-3">
                                        {
                                            Array?.isArray(places) && places?.map((val,key)=>(
                                                <div role='button' key={key} className='rounded-15px border border-secondary-subtle mb-3' onClick={()=>handleChange(val?.img, val?.name, val?.duration, val?.description, val?.flight, val?.stay)}>
                                                    <div className="row">
                                                        <div className="col-md-4 pe-0">
                                                            <img src={val?.img} className='w-100 h-100 rounded-right-15px' alt={val?.img} />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className='pt-1 fs-16px'>{val?.name}</div>
                                                            <div className='text-secondary fs-12px'>{val?.duration}</div>
                                                            <div className='text-secondary fs-12px'>{val?.description?.substring(0,20)}...</div>
                                                            <div className='d-flex align-items-center justify-content-between p-3 fs-12px'>
                                                                <div>&nbsp;</div>
                                                                <div>
                                                                    <div><i className="fa-solid fa-jet-fighter fa-rotate-by" style={{ '--fa-rotate-angle': '315deg' }}></i> <i className="fa-solid fa-euro-sign"></i>{val?.flight}</div>
                                                                    <div><i className="fa-solid fa-bed"></i> <i className="fa-solid fa-euro-sign"></i>{val?.stay}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <div className='rounded-15px border border-secondary-subtle mb-3 p-3'>
                                            {
                                                !isLoading ?
                                                <>
                                                    <center>
                                                        <img src={data?.img} className='w-50 rounded' alt={data?.img} />
                                                        <h4>{data?.name}</h4>
                                                    </center>
                                                    <div className='d-flex align-items-center justify-content-between fs-12px'>
                                                        <div>{data?.duration}</div>
                                                        <div>
                                                            <div><i className="fa-solid fa-jet-fighter fa-rotate-by" style={{ '--fa-rotate-angle': '315deg' }}></i> <i className="fa-solid fa-euro-sign"></i>{data?.flight}</div>
                                                            <div><i className="fa-solid fa-bed"></i> <i className="fa-solid fa-euro-sign"></i>{data?.stay}</div>
                                                        </div>
                                                    </div>
                                                    <div className='text-justify mt-3'>{data?.description}</div>
                                                </>
                                                :
                                                <Loader />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ''
                        }
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </>
    )
}

export default Home