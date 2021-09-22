import { getElementError } from '@testing-library/dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Searchbar() {
    // const [sub, setSub] = useState([]);
    // useEffect(() => {
       
    //     axios.get('http://localhost:5000/api/subjects')
    //     .then(res => {
    //             setSub(res.data);
    //             console.log(res.data);       
    //     })
    // },[]);
    function click(){
        const abbr = document.getElementById('seach').value;
        console.log();
        window.location= '/subjectdetail/' + abbr ;
    }
    return (
        <div class="flex justify-center">
            <div class="pt-10 w-1/3">
                <div class="bg-white flex items-center rounded-full shadow-lg">
                    <input id="seach" class="rounded-l-full w-full py-4 pl-8 text-gray-600 leading-tight focus:outline-none placeholder-gray-600 focus:placeholder-gray-400" type="search" placeholder="Search for a course code or name"
                        
                    ></input>
                    <div class="p-2">
                        <button onClick={click}  class="font-semibold bg-yellow-500 text-white rounded-full px-5 py-3 hover:bg-yellow-600 focus:outline-none flex items-center justify-center active:bg-yellow-600 transition duration-300">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;