import React from 'react'
import { tick, transacImg } from '../../assets/images'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1)
  return (
    <div className="flex flex-wrap mt-8">
        <div className='w-full'>
            <ul className='flex justify-start mb-0 list-none flex-wrap pt-3 flex-row border-b-2 not-italic font-medium '
                role='tablist'
            >
                <li className={ "-mb-px mr-2 last:mr-0  flex-auto text-center " +
                     ( openTab === 1? "border-b-2 border-b-[#E4A518]" : "border-none")
                }>
                    <a className={"text-sm uppercase px-5 leading-normal font-mont " +
                       ( openTab === 1? "text-[#E4A518] bg-gray-50" : "text-[#666666] bg-gray-50")
                        }
                        onClick={e => {
                            setOpenTab(1);
                        }}
                        data-toggle ="tab"
                        href="#link1"
                        role="tablist"
                    >
                        ACH Processing
                    </a>
                </li>
                <li className={ "-mb-px mr-2 last:mr-0  flex-auto text-center font-mont " +
                      (openTab === 2? "border-b-2 border-[#E4A518]" :"border-none")
                }>
                   <a className={"text-sm font-mont uppercase px-5  leading-normal " +
                       ( openTab === 2? "text-[#E4A518] bg-gray-50" : "text-[#666666] bg-gray-50 ")
                        }
                        onClick={e => {
                            setOpenTab(2);
                        }}
                        data-toggle ="tab"
                        href="#link2"
                        role="tablist"
                    >
                        E-Check Processing
                    </a>
                </li>
                <li className={ "-mb-px mr-2 last:mr-0  flex-auto text-center font-mont " +
                      (openTab === 3? "border-b-2 border-[#E4A518]" :"border-none")
                }>
                    <a className={"text-sm font-mont uppercase px-5 leading-normal " +
                       ( openTab === 3? "text-[#E4A518] bg-gray-50" : "text-[#666666] bg-gray-50 ")
                        }
                        onClick = {e=>{
                            setOpenTab(3);
                        }}
                        data-toggle ="tab"
                        href="#link3"
                        role="tablist"
                    >
                        Instant Funding
                    </a>
                </li>
                <li className={ "-mb-px mr-2 last:mr-0  flex-auto text-center font-mont " +
                      (openTab === 4? "border-b-2 border-[#E4A518]" :"border-none")
                }>
                    <a className={"text-sm font-mont uppercase px-5 leading-normal " +
                       ( openTab === 4? "text-[#E4A518] bg-gray-50" : "text-[#666666] bg-gray-50 ")
                        }
                        onClick = {e=>{
                            setOpenTab(4);
                        }}
                        data-toggle ="tab"
                        href="#link4"
                        role="tablist"
                    >
                        Instant Funding
                    </a>
                </li>
                <li className={ "-mb-px mr-2 last:mr-0  flex-auto text-center " +
                      (openTab === 5? "border-b-2 border-[#E4A518]" : "border-none")
                }>
                    <a className={"text-sm font-mont uppercase px-5 leading-normal " +
                       ( openTab === 5? "text-[#E4A518] bg-gray-50" : "text-[#666666] bg-gray-50 ")
                        }
                        onClick = {e=>{
                            setOpenTab(5);
                        }}
                        data-toggle ="tab"
                        href="#link5"
                        role="tablist"
                    >
                        Instant Funding
                    </a>
                </li>
            </ul>
            <div className='relative'>
                <div>
                    <div className='tab-content tab-space mt-6 mb-6'>
                        <div className={openTab === 1 ?'grid md:grid-cols-2 space-x-5':"hidden"} id="link1">
                            <div className='flex flex-col justify-center mb-5'>
                                <p>We offer simple, safe, and speedy electronic ACH credits and debits directly
                                 to and from your customers' bank accounts.</p>
                                 <ul className='mt-3 space-y-4 font-mont not-italic text-[#666666] font-normal
                                     text-base '>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                     No reserves needed</li>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                    Establish late cut-off times</li>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                    Set up single and reoccurring payments</li>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                    Pay bills easily</li>

                                 </ul>
                                 <a href='/' className =' mt-9 flex font-mont font-semibold text-md  text-[#01A0E4] gap-[10px] uppercase'>
                                    Learn More 
                                    <span className='w-[26px]'><ArrowLongRightIcon/></span>
                                </a>
                            </div>
                            <div>
                              <div className='max-w-[473px] max-h-[473px] object-contain'>
                                <img className='full-w' src={transacImg} alt="transaction img"/>
                               </div>
                            </div>
                        </div>
                        <div className={openTab === 2 ?'grid md:grid-cols-2 space-x-5':"hidden"} id="link2">
                        <div className='flex flex-col justify-center mb-5'>
                                <p>We offer simple, safe, and speedy electronic ACH credits and debits directly
                                 to and from your customers' bank accounts.</p>
                                 <ul className='mt-3 space-y-4 font-mont font-mont not-italic text-[#666666] font-normal
                                     text-base'>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                     No reserves needed</li>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                    Establish late cut-off times</li>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                    Set up single and reoccurring payments</li>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                    Pay bills easily</li>

                                 </ul>
                                 <a href='/' className =' mt-9 flex font-mont font-semibold text-md  text-[#01A0E4] gap-[10px] uppercase'>
                                    Learn More 
                                    <span className='w-[26px]'><ArrowLongRightIcon/></span>
                                </a>
                            </div>
                            <div>
                              <div className='max-w-[473px] max-h-[473px] object-contain'>
                                <img className='full-w' src={transacImg} alt="transaction img"/>
                               </div>
                            </div>
                        </div>
                        <div className={openTab === 3 ?'grid md:grid-cols-2 space-x-5':"hidden"} id="link3">
                        <div className='flex flex-col justify-center mb-5'>
                                <p className='font-mont'>We offer simple, safe, and speedy electronic ACH credits and debits directly
                                 to and from your customers' bank accounts.</p>
                                 <ul className='mt-3 space-y-4 font-mont font-mont not-italic text-[#666666] font-normal
                                     text-base'>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                     No reserves needed</li>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                    Establish late cut-off times</li>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                    Set up single and reoccurring payments</li>
                                    <li className='flex gap-[15px] font-mont'><span><img src={tick} alt="tick"/></span>
                                    Pay bills easily</li>

                                 </ul>
                                 <a href='/' className ='mt-9 flex font-mont font-semibold text-md  text-[#01A0E4] gap-[10px] uppercase'>
                                    Learn More 
                                    <span className='w-[26px]'><ArrowLongRightIcon/></span>
                                </a>
                            </div>
                            <div>
                              <div className='max-w-[473px] max-h-[473px] object-contain'>
                                <img className='full-w' src={transacImg} alt="transaction img"/>
                               </div>
                            </div>
                        </div>
                        <div className={openTab === 4 ?'grid md:grid-cols-2 space-x-5':"hidden"} id="link4">
                        <div className='flex flex-col justify-center mb-5'>
                                <p>We offer simple, safe, and speedy electronic ACH credits and debits directly
                                 to and from your customers' bank accounts.</p>
                                 <ul className='mt-3 space-y-4'>
                                    <li className='flex gap-[15px]'><span><img src={tick} alt="tick"/></span>
                                     No reserves needed</li>
                                    <li className='flex gap-[15px]'><span><img src={tick} alt="tick"/></span>
                                    Establish late cut-off times</li>
                                    <li className='flex gap-[15px]'><span><img src={tick} alt="tick"/></span>
                                    Set up single and reoccurring payments</li>
                                    <li className='flex gap-[15px]'><span><img src={tick} alt="tick"/></span>
                                    Pay bills easily</li>

                                 </ul>
                                 <a href='/' className ='mt-9 flex font-mont font-semibold text-md  text-[#01A0E4] gap-[10px] uppercase'>
                                    Learn More 
                                    <span className='w-[26px]'><ArrowLongRightIcon/></span>
                                </a>
                            </div>
                            <div>
                              <div className='max-w-[473px] max-h-[473px] object-contain'>
                                <img className='full-w' src={transacImg} alt="transaction img"/>
                               </div>
                            </div>
                        </div>
                        <div className={openTab === 5 ?'grid md:grid-cols-2 space-x-5':"hidden"} id="link5">
                        <div className='flex flex-col justify-center mb-5'>
                                <p>We offer simple, safe, and speedy electronic ACH credits and debits directly
                                 to and from your customers' bank accounts.</p>
                                 <ul className='mt-3 space-y-4'>
                                    <li className='flex gap-[15px]'><span><img src={tick} alt="tick"/></span>
                                     No reserves needed</li>
                                    <li className='flex gap-[15px]'><span><img src={tick} alt="tick"/></span>
                                    Establish late cut-off times</li>
                                    <li className='flex gap-[15px]'><span><img src={tick} alt="tick"/></span>
                                    Set up single and reoccurring payments</li>
                                    <li className='flex gap-[15px]'><span><img src={tick} alt="tick"/></span>
                                    Pay bills easily</li>

                                 </ul>
                                 <a href='/' className ='mt-9 flex font-mont font-semibold text-md  text-[#01A0E4] gap-[10px] uppercase'>
                                    Learn More 
                                    <span className='w-[26px]'><ArrowLongRightIcon/></span>
                                </a>
                            </div>
                            <div>
                              <div className='max-w-[473px] max-h-[473px] object-contain'>
                                <img className='full-w' src={transacImg} alt="transaction img"/>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabs