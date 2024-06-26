"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import NavBar from "../components/navbar.js"
import Circularbar from "../../../app/components/Circularbar1.js";
import Link from 'next/link.js';
import Summary from "../../../app/components/ScoreSummarySimple.js"
import { useSearchParams } from 'next/navigation'
import Pdf from 'react-to-pdf';
import { useRef } from 'react';
import "./6.css";

export default function CompleteReportPage6() {
    const ref = useRef();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const [isLoading, setIsLoading] = useState(true);
    const [church_name, set_church_name] = useState('');
    const [digitalVoice, setDigitalVoice] = useState(0);
    const [appleMaps, setAppleMaps] = useState(0);
    const [googleMaps, setGoogleMaps] = useState(0);
    const [socialClarity, setsocialClarity] = useState(0);
    const [websiteAuthority, setwebsiteAuthority] = useState(0);
    const [vrVoice, setvrVoice] = useState(0);
    const [vrMaps, setvrMaps] = useState(0);
    const [vrSocial, setvrSocial] = useState(0);
    const [vrWebsite, setvrWebsite] = useState(0);
    const [last_month_searches, set_last_month_searches] = useState(0);
    const [loc_city, setLoc_city] = useState("");
    const [loc_zipcode, setLoc_zipcode] = useState("");
    const [loc_address, setLoc_address] = useState("");
    const [loc_state, setLoc_state] = useState("");
    const [webpage, setWebpage] = useState("");
    const [keywords, setKeywords] = useState("");

    const searchParams = useSearchParams()
    const user_key = searchParams.get('user_key')
    const map = searchParams.get('map_key')

    useEffect(() => {
        const fetchData = async () => {
          try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Access-Control-Allow-Origin", "*")
            const response = await fetch('http://localhost:8080/api/fetch-data', {
                method: 'POST',
                body: JSON.stringify({"user_key" : user_key}),
                headers: myHeaders,
            })
            
            const data = await response.json()
      
            set_church_name(data.church_name);
            setDigitalVoice(data.digitalVoice);
            setAppleMaps(data.appleMaps);
            setGoogleMaps(data.googleMaps);
            setsocialClarity(data.socialClarity);
            setwebsiteAuthority(data.websiteAuthority);
            setvrVoice(data.vrVoice);
            setvrMaps(data.vrMaps);
            setvrSocial(data.vrSocial);
            setvrWebsite(data.vrWebsite);
            set_last_month_searches(data.last_month_searches);
            setLoc_city(data.loc_city);
            setLoc_address(data.loc_address);
            setLoc_zipcode(data.loc_zipcodesetLoc_ziploc_zipcode);
            setLoc_state(data.loc_state);
            setWebpage(data.website);
            setKeywords(data.keywords.split(","));
            console.log('Sucess fetching data: ', data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

    return (

        


            <div id="cr_page6" className="relative min-w-[1920px] w-[1920px] min-h-[1080px] h-[1080px] m-auto grid grid-cols-9 grid-rows-2 justify-center bg-white overflow-hidden" >
                <div className="absolute left-[40px] top-[77px] w-[200px] z-[1000]">
                    <Image
                        src={"/full_report_logo.svg"}
                        alt={" "}
                        height={400}
                        width={400}
                    />
                </div>
                <div className="relative col-span-2 row-span-2 menu-shadow">
                    <div>
                        <NavBar user_key={user_key} map={map} page={6}></NavBar>
                    </div>
                    
                    
                </div>

                <div className="col-span-7 row-span-2 bg-[#F9FCFD] pt-[90px] pl-[130px] overflow-hidden">
                    <div className='flex items-center w-full gap-[20px]'>
                        
                        <div className='rounded-3xl justify-center justify-items-center h-[430px] w-[800px] pt-[30px] bg-white page-6-shadow-box-1'>
                            <div className="m-auto w-full flex justify-center">
                                <Image
                                    className='w-[142px]'
                                    src={"/img-ct1-page5.png"}
                                    alt={" "}
                                    height={400}
                                    width={400}
                                />
                            </div>
                            <h1 className='text-[#050938] text-[30px] font-medium text-center m-auto mt-[10px] leading-[130%] tracking-[-1.2px] w-[426px]'>
                                Why your <a className='text-[#0179FF]'>Website Authority Score </a>is Important
                            </h1>
                            <h2 className='text-[#75778B] w-[699px] mt-[20px] left-0 text-[20px] font-[400] text-center m-auto leading-[143%] tracking-[-0.8px] '>
                                The #1 organic result is 10x more likely to receive a click compared to #10 spot. This makes having a well-ranking website extremely important. A strong online presence leads to more people finding your church, identifying with your mission and culture, and visiting your church.
                            </h2>
                            
                            <div className='w-full flex justify-end mt-[20px] pr-[80px]'>
                                <Link className="" href={"https://backlinko.com/google-ctr-stats?_gl=1*19kkzkr*_ga*MTg2NDAxNDU1OC4xNzA5NTk3NDUx*_ga_BPNLXP3JQG*MTcxMTczNzgwMi4yLjAuMTcxMTczNzgwMi4wLjAuMjAwOTQxOTIzNg..*_ga_HYWKMHR981*MTcxMTczNzgwMi4yLjAuMTcxMTczNzgwMi42MC4wLjA."}>
                                    <h3 className='text-[#0179FF] text-[15px] font-regular'> Source: backlinko </h3>
                                </Link>                            
                            </div>
                        </div>

                        <div className='rounded-3xl w-[453px] h-[430px] pt-[45px] bg-white page-6-shadow-box-2'>
                            <h1 className='text-[30px] font-medium text-[#050938] m-auto text-center w-[304px] leading-[115%] tracking-[-1.2px]'>
                                Your Church Website Authority Score
                            </h1>
                            <div className='m-auto flex justify-center w-full mt-[20px]'>
                                <Circularbar value={websiteAuthority} title={undefined} max_value={250}/>
                            </div>
                        </div>
                
                    </div>

                    <div className='flex items-center w-full gap-[20px] mt-[20px]'>

                        <div className=" bg-[url('/bg-ct2-page5.png')] bg-auto w-[365px] h-[430px]  rounded-3xl overflow-hidden page-6-shadow-box-3">
                            <div className="relative w-full h-[45vh] rounded-3xl pt-[40px]">
                                <h1 className='text-white w-[234px] ml-10 text-[32px] font-medium leading-[130%] tracking-[-1.2px]'>
                                    9 out of 10 people will visit your church website before ever visiting in-person
                                </h1>
                            </div>
                        </div>

                        <div className='w-[890px] h-[430px] rounded-3xl px-[70px] py-[30px] bg-white page-6-shadow-box-4'>
                            <div className="flex">
                                <div className="flex flex-col gap-[10px]">
                                    <h1 className='text-[#050938] text-[30px] font-medium w-[544px] leading-[115%] tracking-[-1.2px]'>Your Church’s Domain Keywords in Organic Search</h1>
                                    <h2 className='text-[#75778B] text-[20px] font-regular w-[530px] leading-[143%] tracking-[-0.8px]' >The top 8 keywords or phrases your website is known for by Google and other search engines</h2>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="w-[150px] m-auto">
                                        <Image
                                            className="w-[190px]"
                                            src={"/img-ct4-page5.png"}
                                            alt={" "}
                                            height={400}
                                            width={400}
                                        />
                                    </div>
                                </div>
                            </div>                            
                            <div className='mt-[30px]'>
                                {keywords.length > 0 && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <ul className='text-xl text-blue-600'>
                                        {keywords.slice(0, Math.floor(keywords.length / 2)).map((keyword) => (
                                            <li className='mb-[10px]' key={keyword}>{keyword}</li>
                                        ))}
                                        </ul>
                                        <ul className='text-xl text-blue-600'>
                                        {keywords.slice(Math.floor(keywords.length / 2)).map((keyword) => (
                                            <li className='mb-[10px]' key={keyword}>{keyword}</li>
                                        ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                    
                        </div>
                        
                    </div>

                </div>

                {/*
                
                <div className='col-span-4 w-[42vw] h-[45vh] shadow-2xl rounded-3xl relative left-10 top-3'>
                    <div className="relative -right-72 top-0 w-[150px] m-auto">
                        <Image
                            src={"/keywords_im.svg"}
                            alt={" "}
                            height={400}
                            width={400}
                        />
                    </div>
                    <h1 className='text-[#050938] text-[28px] font-medium w-2/3 relative left-12 -top-24'>Your Church’s Domain Keywords in Organic Search</h1>
                    <h2 className='text-[#75778B] text-[18px] font-regular w-3/4 relative left-12 -top-16' >The top 8 keywords or phrases your website is known for by Google and other search engines</h2>
                    <div className='relative -right-12 bottom-10'>
                        {keywords.length > 0 && (
                            <div className="grid grid-cols-2 gap-4">
                                <ul className='text-xl text-blue-600'>
                                {keywords.slice(0, Math.floor(keywords.length / 2)).map((keyword) => (
                                    <li key={keyword}>{keyword}</li>
                                ))}
                                </ul>
                                <ul className='text-xl text-blue-600'>
                                {keywords.slice(Math.floor(keywords.length / 2)).map((keyword) => (
                                    <li key={keyword}>{keyword}</li>
                                ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    
                    </div>*/}
            </div>
           

    )
}