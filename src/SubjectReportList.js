
function SubjectReportList(props) {
    return (
        <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl shadow-lg">
            <div class="py-3 px-3">
                <div class="font-bold text-lg bg-yellow-500 bg-opacity-20 text-black rounded-full px-4 py-2 flex items-center justify-center">
                    {/* {lists.subject_abbr} */}
                    {props.subject.subject_abbr}
                </div>
                <div class="rounded-l-full w-full py-3 md:py-4 px-4 text-black">
                    {/* <p class="text-lg font-semibold">{lists.subject_name}</p> */}
                    <p class="text-md font-bold">{props.subject.subject_name}</p>
                </div>
                <div class="flex pt-3 justify-center">
                    <div class="grid grid-cols-3 grid-rows-4 gap-x-2 sm:gap-x-4 gap-y-1 mx-4">
                        <div class="pb-3 font-bold text-md col-span-3">Course Score</div>
                        <div class="pb-2 font-semibold col-span-2">Teaching:</div>
                        <div class="flex ml-4 justify-end">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg> */}
                            {props.subject.teacher_avg}/5
                        </div>
                        <div class="pb-2 font-semibold col-span-2">Bring knowlegde to use:</div>
                        <div class="flex ml-4 justify-end">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg> */}
                            {props.subject.usefulness_avg}/5
                        </div>
                        <div class="pb-2 font-semibold col-span-2">Participation:</div>
                        <div class="flex ml-4 justify-end">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg> */}
                            {props.subject.participation_avg}/5
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubjectReportList;