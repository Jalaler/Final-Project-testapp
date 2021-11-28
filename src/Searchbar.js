import { getElementError } from '@testing-library/dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Searchbar(props) {
  
    
    function click(){
        const abbr = document.getElementById('seach').value;
        
        window.location = props.urlForSeach +'/' +abbr ;
    }
 
    return (
        <div class="flex justify-center">
            <div class="pt-10 w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
                <div class="bg-white flex items-center rounded-full shadow-lg">
                    <input id="seach" class="rounded-l-full w-full py-4 pl-8 text-gray-600 leading-tight focus:outline-none placeholder-gray-600 focus:placeholder-gray-400" type="search" placeholder="Search course code or name"
                        
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