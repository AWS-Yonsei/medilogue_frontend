import * as React from "react";

function CalendarLayout(props) {
  return (
    <div className="flex gap-0 bg-white max-md:flex-wrap">
      <div className="flex flex-col px-5 pt-8 pb-12 whitespace-nowrap basis-0 bg-slate-300 text-neutral-600 max-md:hidden">
        <div className="text-2xl font-extrabold tracking-tighter">menu</div>
        <div className="shrink-0 mt-12 h-px max-md:mt-10" />
        <div className="flex flex-col items-center px-2 mt-6 text-sm font-bold">
          <div className="self-stretch">Core</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/366a401627ee8b7fe59452f917d17833e1267e2e47ffe63495e5d6213f670757?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="mt-6 aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b51516d30c032f7b31af6563ba64b990e35dccd5da78b6546eef7e0dbb3f9132?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b614b93a28b5ca40a1ff892d7a8d8cffd3fcf459577e96616739260722785f39?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa64b524a7e79556f8838ac092e1512e093a9482869db90cee4e907b15881748?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0cd99d5499f718d9454600a83f8bed8a7370dcf25a95ddd78ba394a137afe83?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae13fff898e36cdd43f878524bee401ab2f5eb185e8b28d9c02da2fe84e77947?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee66f13d743efe48f8a20151fc077ba2852257b5034df74a1d1d15fd9748403?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center py-4 pl-12 w-full whitespace-nowrap bg-slate-300 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-4 self-stretch px-6 py-4 my-auto text-base bg-zinc-50 rounded-[50px] text-zinc-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3c633b783e3ffdc1e8b861d600fdf7c8bc5bdbf18b925cd0997d534212d756c?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
              className="w-6 aspect-square"
            />
            <div className="flex-auto my-auto">Search</div>
          </div>
          <div className="flex gap-3.5 justify-between items-end self-stretch my-auto leading-[143%] text-neutral-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/38886283cdcccf6fdc0f409080826b128833b6f48fd8c7b450989f752def0a3a?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
              className="mt-9 aspect-[1.79] w-[39px]"
            />
            <div className="mt-10 text-lg tracking-tight">Live</div>
            <div className="flex gap-5 justify-between self-stretch px-9 py-5 text-base tracking-tight text-center border border-solid border-neutral-600 border-opacity-70 rounded-[50px] max-md:px-5">
              <div>English</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc515bd8ae5cda1e4e30dddb36cdbfb8585d82825b945ea452a7ac51d0b886d8?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                className="my-auto aspect-[1.67] stroke-[2px] stroke-neutral-600 w-[15px]"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-between items-start self-stretch text-xs text-stone-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/77109e92fedf2920a589dca8c46aede2a7bb0f39bf285f44838931b80b1b76d9?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
              className="aspect-[0.97] w-[60px]"
            />
            <div className="flex gap-5 justify-between px-3 pt-2.5 pb-1 mt-1.5 rounded-xl border border-solid border-[color:var(--Gray-5,#E0E0E0)]">
              <div className="flex gap-4 justify-between">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47e40563482b11735ceddabd339377003a6f8db45073dd45d1cbdd04171ca60d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e40563482b11735ceddabd339377003a6f8db45073dd45d1cbdd04171ca60d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e40563482b11735ceddabd339377003a6f8db45073dd45d1cbdd04171ca60d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e40563482b11735ceddabd339377003a6f8db45073dd45d1cbdd04171ca60d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e40563482b11735ceddabd339377003a6f8db45073dd45d1cbdd04171ca60d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e40563482b11735ceddabd339377003a6f8db45073dd45d1cbdd04171ca60d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e40563482b11735ceddabd339377003a6f8db45073dd45d1cbdd04171ca60d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47e40563482b11735ceddabd339377003a6f8db45073dd45d1cbdd04171ca60d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                  className="rounded-full aspect-square w-[45px]"
                />
                <div className="flex flex-col flex-1 self-start mt-1">
                  <div className="font-semibold">User Name</div>
                  <div className="mt-3.5 font-medium">
                    <span className="text-stone-600">ID: </span>
                    <span className="font-semibold text-stone-600">
                      1234567
                    </span>
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8854a884f852a7dd02aaf99776620dee37b6aa412b167268c4443d5a2b13c4f?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                className="my-auto w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="mx-6 mt-2 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59cbf14fac968380241e6be2670eacacc040d73ccf0e7047e0f3667b80da8ca6?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                className="grow mt-16 w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pt-4 pb-12 mx-auto w-full bg-white rounded-md border border-solid border-black border-opacity-30 max-md:mt-2.5">
                <div className="flex flex-col px-4">
                  <div className="flex gap-5 justify-between pr-6 whitespace-nowrap max-md:pr-5">
                    <div className="flex flex-col">
                      <div className="text-base text-neutral-600">Today</div>
                      <div className="mt-5 text-xl font-medium text-neutral-900">
                        Tuesday 2024/01/31
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b0b5a6d95d8c6adb712041e9c45ba2bfb0c62ae89354ae0b126fbfd881cdd10?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                      className="self-start aspect-square w-[38px]"
                    />
                  </div>
                  <div className="flex gap-4 justify-between mt-16 max-md:mt-10">
                    <div className="grow self-start text-sm whitespace-nowrap text-zinc-700">
                      08:00 am
                    </div>
                    <div className="flex gap-3 justify-between text-base font-medium tracking-tight rounded bg-emerald-400 bg-opacity-30 text-stone-900">
                      <div className="bg-teal-600 rounded h-[76px] w-[5px]" />
                      <div className="flex flex-col flex-1 my-auto">
                        <div>환자 이름: ㄱㅇㅁ</div>
                        <div className="mt-4">환자 ID: 123456</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between mt-8">
                    <div className="grow self-start text-sm whitespace-nowrap text-zinc-700">
                      10:45 am
                    </div>
                    <div className="flex gap-2 justify-between text-base font-medium tracking-tight bg-orange-50 rounded text-stone-900">
                      <div className="bg-orange-400 rounded h-[76px] w-[5px]" />
                      <div className="flex flex-col flex-1 my-auto">
                        <div>환자 이름: ㄱㅇㅁ</div>
                        <div className="mt-4">환자 ID: 123456</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between mt-8 whitespace-nowrap">
                    <div className="grow self-start text-sm text-zinc-700">
                      12:00 am
                    </div>
                    <div className="flex flex-col flex-1 items-start py-4 pr-20 pl-4 text-base font-medium tracking-tight rounded bg-red-600 bg-opacity-20 text-stone-900 max-md:pr-5">
                      <div>환자 이름: ㄱㅇㅁ</div>
                      <div className="mt-4">환자 ID: 123456</div>
                    </div>
                  </div>
                  <div className="mt-7 text-sm text-zinc-700">02:40 pm</div>
                  <div className="self-center text-base font-medium tracking-tight whitespace-nowrap text-stone-900">
                    환자 이름: ㄱㅇㅁ
                  </div>
                  <div className="self-center mt-4 text-base font-medium tracking-tight whitespace-nowrap text-stone-900">
                    환자 ID: 123456
                  </div>
                </div>
                <div className="flex gap-4 self-center mt-11 max-w-full whitespace-nowrap w-[364px] max-md:mt-10">
                  <div className="grow self-start text-sm text-zinc-700">
                    04:00 pm
                  </div>
                  <div className="flex flex-col flex-1 items-start py-4 pr-20 pl-5 text-base font-medium tracking-tight rounded bg-sky-600 bg-opacity-20 text-stone-900 max-md:px-5">
                    <div>환자 이름: ㄱㅇㅁ</div>
                    <div className="mt-4">환자 ID: 123456</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarLayout;