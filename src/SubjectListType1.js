import { React, useState, useEffect } from 'react';
import axios from 'axios';
import backendURL from './URL';

function SubjectListType1(props) {

    return (
        <div>
                <div class="flex justify-center">
                    <div class="pt-4 w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2">
                        <a href={"/subjectdetail/" + props.subject.subject_abbr} class="bg-yellow-300 bg-opacity-5 border-2 border-yellow-300 block md:flex items-center rounded-2xl md:rounded-full shadow-lg hover:bg-yellow-200 hover:bg-opacity-20 cursor-pointer">
                            <div class="py-3 md:py-2 px-3">
                                <div class="font-bold text-xl bg-yellow-500 bg-opacity-20 text-black rounded-full px-7 py-4 flex items-center justify-center">
                                    {props.subject.subject_abbr}
                                </div>
                            </div>
                            <div class="rounded-l-full w-full pb-3 md:py-4 pl-6 pr-6 text-black">
                                <p class="text-lg font-semibold">{props.subject.subject_name}</p>
                            </div>
                            {/* <div class="flex pl-5 md:pl-6 md:pr-6 pb-4 md:pb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div> */}
                        </a>
                    </div>
                </div>
            
        </div>
    );
}

export default SubjectListType1;