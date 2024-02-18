import * as React from "react";

function PatientRecordLayout(props) {
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a730d8e71c471c219340533b845ed5fcd450690e7e2894893e503f4cce93910?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b614b93a28b5ca40a1ff892d7a8d8cffd3fcf459577e96616739260722785f39?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14ffa30c6d5cf9910043e20c412c12f257f2cab7db110b614a3ed9c9a133dbab?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5352c816afe74cd080fa45d63e445dd76a03510f44724978d7437b1a2e689e74?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc93f8b2975f78c7127a498e2531d2ecd6e5a0c7b154ceb8c277c43075f2c6b1?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75e71eaed601b38822dc51d446372a24acbfaf2eb45f6ea92d85e914e4ab6fda?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
            className="aspect-[1.19] w-[69px]"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 self-start max-md:max-w-full">
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da326fad05d652b73ad956de1435b7954dc728eec84cf140d1d3b5c6b775dfb3?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
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
        <div className="mt-3 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch pt-4 pr-1 pb-7 pl-2.5 m-auto w-full bg-white rounded-xl border border-solid shadow-md backdrop-blur-[5px] border-black border-opacity-30 max-md:mt-10">
                <div className="text-lg font-semibold text-neutral-700">
                  내원 이력
                </div>
                <div className="shrink-0 mt-3 h-px bg-black bg-opacity-10" />
                <div className="flex gap-5 justify-between self-center mt-3 max-w-full font-medium whitespace-nowrap w-[249px]">
                  <div className="my-auto text-xs text-zinc-900">
                    2024/01/13
                  </div>
                  <div className="flex gap-2 justify-between p-0.5 text-xs bg-white rounded border border-solid border-black border-opacity-30 text-black text-opacity-60">
                    <div className="my-auto">상세보기</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e030d13670f5087178b8cd7a43d3f3737aa24144477ebe8183e1d16b10e7d6b?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                      className="w-4 aspect-[1.06]"
                    />
                  </div>
                </div>
                <div className="text-xs leading-4 text-neutral-400">
                  담당의사: 강재현
                </div>
                <div className="shrink-0 mt-2.5 h-px bg-black bg-opacity-10" />
                <div className="flex gap-5 justify-between self-center mt-3 max-w-full font-medium whitespace-nowrap w-[249px]">
                  <div className="text-xs text-sky-600">2024/01/02</div>
                  <div className="flex gap-2 justify-between p-0.5 text-xs bg-white rounded border border-solid border-black border-opacity-30 text-black text-opacity-60">
                    <div className="my-auto">상세닫기</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a97bf723c32ce78caa2c4db594cba0cc0b0d3e8db0e08d2e4ef9c1666440c9af?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                      className="w-4 aspect-[1.06]"
                    />
                  </div>
                </div>
                <div className="flex gap-2.5 justify-between mt-1 text-xs leading-4 text-black text-opacity-70">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdf78b8712a272190a90d902d9d684c80aacb3b3cac155addce279c184e83671?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                    className="aspect-[0.95] w-[19px]"
                  />
                  <div className="flex-auto">담당의사: 강재현</div>
                </div>
                <div className="self-start ml-9 text-xs leading-4 text-black text-opacity-70 max-md:ml-2.5">
                  진단명: 당뇨병
                </div>
                <div className="self-start mt-2 ml-9 text-xs leading-4 text-black text-opacity-70 max-md:ml-2.5">
                  처방약: 비타민D
                </div>
                <div className="flex gap-2 self-start mt-2.5 ml-2.5 text-xs font-medium leading-4 text-neutral-700">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e97aa2b7f0cfed6bb3204729ac3eabab65139f84d2661ecbcd089425d68002b?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                    className="aspect-[1.06] stroke-[1.5px] stroke-neutral-700 w-[18px]"
                  />
                  <div className="my-auto">진단 내역</div>
                </div>
                <div className="self-start mt-1.5 ml-9 text-xs leading-4 whitespace-nowrap text-black text-opacity-70 max-md:ml-2.5">
                  <span className="text-black">증상: </span>열감, 가리움{" "}
                </div>
                <div className="mt-2 ml-9 text-xs leading-4 text-black text-opacity-70 max-md:ml-2.5">
                  부위: 얼굴, 목, 손목, 허벅지 안쪽
                  <br />
                </div>
                <div className="flex gap-2.5 items-start self-start mt-1.5 ml-3.5 text-xs leading-4 text-black text-opacity-70 max-md:ml-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5e6e3f968ce3ec5cd9e381aa2dc4e52a89ae36362bad0150337d5235df61e65?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                    className="mt-3.5 aspect-[0.59] stroke-[1.5px] stroke-neutral-700 w-[13px]"
                  />
                  <div className="flex flex-col flex-1">
                    <div>치료경험: 동네피부과-스테로이드</div>
                    <div className="mt-3">50,000원</div>
                  </div>
                </div>
                <div className="shrink-0 mt-2 h-px bg-black bg-opacity-10" />
                <div className="flex gap-5 justify-between self-center mt-3 max-w-full font-medium whitespace-nowrap w-[249px]">
                  <div className="my-auto text-xs text-zinc-900">
                    2023/12/21
                  </div>
                  <div className="flex gap-2 justify-between p-0.5 text-xs bg-white rounded border border-solid border-black border-opacity-30 text-black text-opacity-60">
                    <div className="my-auto">상세보기</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcf5e3093ae204ae7a516ee36aa79a2a398385423453cca9de5fb150cf77f2aa?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                      className="aspect-square w-[15px]"
                    />
                  </div>
                </div>
                <div className="self-start ml-4 text-xs leading-4 whitespace-nowrap text-neutral-400 max-md:ml-2.5">
                  담당의사: 강재현
                </div>
                <div className="shrink-0 mt-4 h-px bg-black bg-opacity-10" />
                <div className="flex gap-5 justify-between self-center mt-3 max-w-full font-medium whitespace-nowrap w-[249px]">
                  <div className="my-auto text-xs text-zinc-900">
                    2023/12/13
                  </div>
                  <div className="flex gap-2 justify-between p-0.5 text-xs bg-white rounded border border-solid border-black border-opacity-30 text-black text-opacity-60">
                    <div className="my-auto">상세보기</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcf5e3093ae204ae7a516ee36aa79a2a398385423453cca9de5fb150cf77f2aa?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                      className="aspect-square w-[15px]"
                    />
                  </div>
                </div>
                <div className="self-start ml-4 text-xs leading-4 whitespace-nowrap text-neutral-400 max-md:ml-2.5">
                  담당의사: 강재현
                </div>
                <div className="shrink-0 mt-4 h-px bg-black bg-opacity-10" />
                <div className="flex gap-5 justify-between self-center mt-3 max-w-full font-medium whitespace-nowrap w-[249px]">
                  <div className="my-auto text-xs text-zinc-900">
                    2023/11/24
                  </div>
                  <div className="flex gap-2 justify-between p-0.5 text-xs bg-white rounded border border-solid border-black border-opacity-30 text-black text-opacity-60">
                    <div className="my-auto">상세보기</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7c57604ce8e9e0f34ea2dcf06ca6c37985447b123fc9e251a317c380c88f9e?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                      className="w-4 aspect-[1.06]"
                    />
                  </div>
                </div>
                <div className="self-start ml-3 text-xs leading-4 whitespace-nowrap text-neutral-400 max-md:ml-2.5">
                  담당의사: 강재현
                </div>
                <div className="shrink-0 mt-6 h-px bg-black bg-opacity-10" />
                <div className="flex gap-5 justify-between self-center mt-3 font-medium">
                  <div className="flex flex-col flex-1 text-xs text-black text-opacity-70">
                    <div className="text-sky-600">2023/11/02</div>
                    <div className="flex gap-2.5 justify-between items-start mt-1 text-xs leading-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/73a17ccd485cf463763b87267a23014fc53b0ab16125f5ce14f1b4c59d63e8dc?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                        className="w-5 aspect-square"
                      />
                      <div className="flex flex-col flex-1 mt-1.5">
                        <div>담당의사: 강재현</div>
                        <div className="mt-2">진단명: 당뇨병</div>
                        <div className="mt-2">처방약: 비타민D</div>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-between mt-2.5 leading-[117%] text-neutral-700">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8fdf11fc40a21b89a1d9d6713f642bc60a679833b28f5db541b6693109012ac?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                        className="aspect-[1.06] stroke-[1.5px] stroke-neutral-700 w-[18px]"
                      />
                      <div className="flex-auto my-auto">진단 내역</div>
                    </div>
                    <div className="flex flex-col pr-px pl-7 mt-1.5 text-xs max-md:pl-5">
                      <div className="self-center whitespace-nowrap leading-[133%]">
                        <span className="text-black">증상: </span>열감, 가리움{" "}
                      </div>
                      <div className="mt-2 leading-4">
                        부위: 얼굴, 목, 손목, 허벅지 안쪽
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 self-start p-0.5 text-xs whitespace-nowrap bg-white rounded border border-solid border-black border-opacity-30 text-black text-opacity-60">
                    <div className="my-auto">상세닫기</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e74b9135e03089b41adfe8627499704a94271aae3433abaa598c9545d20a92a2?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                      className="w-4 aspect-[1.06]"
                    />
                  </div>
                </div>
                <div className="flex gap-2 items-start self-start mt-1.5 ml-5 text-xs leading-4 text-black text-opacity-70 max-md:ml-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fc2ae23c828b22477b9f98770efe66005c22ac957fbe9a71a2d7b80a102d14b?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                    className="mt-3.5 aspect-[0.59] stroke-[1.5px] stroke-neutral-700 w-[13px]"
                  />
                  <div className="flex flex-col flex-1">
                    <div>치료경험: 동네피부과-스테로이드</div>
                    <div className="mt-3">50,000원</div>
                  </div>
                </div>
                <div className="shrink-0 mt-3.5 h-px bg-black bg-opacity-10" />
                <div className="flex gap-5 justify-between items-start self-center mt-3 max-w-full whitespace-nowrap w-[249px]">
                  <div className="flex flex-col">
                    <div className="text-xs font-medium text-zinc-900">
                      2023/10/13
                    </div>
                    <div className="mt-1.5 text-xs leading-4 text-neutral-400">
                      담당의사: 강재현
                    </div>
                  </div>
                  <div className="flex gap-2 p-0.5 text-xs font-medium bg-white rounded border border-solid border-black border-opacity-30 text-black text-opacity-60">
                    <div className="my-auto">상세보기</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcf5e3093ae204ae7a516ee36aa79a2a398385423453cca9de5fb150cf77f2aa?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                      className="aspect-square w-[15px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[49%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-3.5 max-md:mt-10 max-md:max-w-full">
                <div className="px-4 py-2 bg-white rounded-xl border border-solid shadow-md backdrop-blur-[5px] border-black border-opacity-30 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col leading-[133%] max-md:mt-10">
                        <div className="flex gap-5 justify-between whitespace-nowrap">
                          <div className="text-lg font-semibold text-neutral-700">
                            진료기록
                          </div>
                          <div className="text-xs font-medium text-sky-600">
                            2024/01/02
                          </div>
                        </div>
                        <div className="flex gap-2.5 justify-between mt-5 text-xs text-black text-opacity-70">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa67cd13cfab88c9ec0b1fa1963b1fc0317dffe77e5aaa1228998c4f15ef2117?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                            className="w-5 aspect-square"
                          />
                          <div className="flex-auto">담당의사: 강재현</div>
                        </div>
                        <div className="flex flex-col pl-3 text-xs text-black text-opacity-70">
                          <div className="self-start ml-6 max-md:ml-2.5">
                            진단명: 당뇨병
                          </div>
                          <div className="self-center mt-2">
                            처방약: 비타민D
                          </div>
                          <div className="flex gap-2 justify-between mt-7 text-xs font-medium leading-4 text-neutral-700">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8348406f805af8ecfa8c527147af38688bb62114c082b5e8eed2691df1ed6011?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                              className="aspect-[1.12] stroke-[1.5px] stroke-neutral-700 w-[19px]"
                            />
                            <div className="flex-auto my-auto">진단 내역</div>
                          </div>
                          <div className="self-center mt-1.5 whitespace-nowrap">
                            <span className="text-black">증상: </span>열감,
                            가리움{" "}
                          </div>
                          <div className="mt-2 leading-4">
                            부위: 얼굴, 목, 손목, 허벅지 안쪽
                            <br />
                          </div>
                          <div className="mt-1.5">
                            치료경험: 동네피부과-스테로이드
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-xs font-semibold leading-4 text-cyan-300 whitespace-nowrap max-md:mt-10">
                        <div className="self-end">전체 이미지</div>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a4c8ac092d9e99f8dcf0398af78bba13c36e11aca653d3477786d229c93844d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a4c8ac092d9e99f8dcf0398af78bba13c36e11aca653d3477786d229c93844d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a4c8ac092d9e99f8dcf0398af78bba13c36e11aca653d3477786d229c93844d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a4c8ac092d9e99f8dcf0398af78bba13c36e11aca653d3477786d229c93844d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a4c8ac092d9e99f8dcf0398af78bba13c36e11aca653d3477786d229c93844d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a4c8ac092d9e99f8dcf0398af78bba13c36e11aca653d3477786d229c93844d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a4c8ac092d9e99f8dcf0398af78bba13c36e11aca653d3477786d229c93844d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a4c8ac092d9e99f8dcf0398af78bba13c36e11aca653d3477786d229c93844d?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                          className="self-start mt-2 w-full aspect-[1.11]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/43124a27-1b39-4da0-a904-12e3c144a6b8?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43124a27-1b39-4da0-a904-12e3c144a6b8?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43124a27-1b39-4da0-a904-12e3c144a6b8?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43124a27-1b39-4da0-a904-12e3c144a6b8?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43124a27-1b39-4da0-a904-12e3c144a6b8?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43124a27-1b39-4da0-a904-12e3c144a6b8?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43124a27-1b39-4da0-a904-12e3c144a6b8?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43124a27-1b39-4da0-a904-12e3c144a6b8?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                          className="self-center mt-1.5 aspect-[3.23] w-[78px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2 pb-3.5 mt-5 bg-white rounded-xl border border-solid shadow-md backdrop-blur-[5px] border-black border-opacity-30 max-md:max-w-full">
                  <div className="flex flex-col pr-8 pl-3 font-semibold max-md:pr-5 max-md:max-w-full">
                    <div className="text-lg text-neutral-700 max-md:max-w-full">
                      처방 내역
                    </div>
                    <div className="flex gap-2.5 mt-3.5 text-base font-medium text-black whitespace-nowrap w-[60px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0860f2b37de82dcc8d4687f2c62781716644418eaf38ba2df0c5d5033b5e91a?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                        className="flex-1 shrink-0 w-full aspect-square"
                      />
                      <div className="my-auto">상세</div>
                    </div>
                    <div className="flex gap-5 justify-between self-start mt-1.5 ml-8 text-sm whitespace-nowrap text-violet-950 max-md:ml-2.5">
                      <div className="grow justify-center px-1.5 py-2 rounded border-violet-100 border-solid bg-zinc-100 border-[2.5px]">
                        아토피성 피부염
                      </div>
                      <div className="justify-center py-2 pr-2.5 pl-1.5 rounded border-violet-100 border-solid aspect-[2.92] bg-zinc-100 border-[2.5px]">
                        피부건조증
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between items-start mt-6 text-sm text-center max-md:flex-wrap max-md:max-w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c1fbeb71b9e09caf7db39c0319c994cd38dc1a909bd9fba4e729875d407aa5?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                        className="aspect-square w-[25px]"
                      />
                      <div className="flex flex-col flex-1 pt-px pb-12 rounded-3xl border border-solid bg-zinc-50 border-black border-opacity-50 max-md:max-w-full">
                        <div className="flex gap-5 justify-between px-20 py-2.5 bg-violet-100 rounded-3xl text-violet-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                          <div>약 이름</div>
                          <div>1회 투약량(g)</div>
                          <div>1일 투여횟수</div>
                          <div>총 투약 일수</div>
                        </div>
                        <div className="flex flex-col pr-14 pl-5 mt-3 text-black whitespace-nowrap max-md:pr-5 max-md:max-w-full">
                          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col self-start basis-0 text-violet-950">
                              <div>1</div>
                              <div className="mt-6">2</div>
                            </div>
                            <div className="flex flex-col basis-0">
                              <div>애니크라듀오시럽</div>
                              <div className="self-center mt-5">곰실린캅셀</div>
                            </div>
                            <div className="flex flex-col flex-1 my-auto">
                              <div className="flex gap-5 justify-between">
                                <div>3.5</div>
                                <div>3</div>
                                <div>2</div>
                              </div>
                              <div className="flex gap-5 justify-between mt-6">
                                <div>0.333</div>
                                <div>3</div>
                                <div>2</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-violet-950">3</div>
                            <div>프로펜정</div>
                            <div>1</div>
                            <div>1</div>
                            <div>5</div>
                          </div>
                          <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-violet-950">4</div>
                            <div>아레스탈정</div>
                            <div>1</div>
                            <div>1</div>
                            <div>4</div>
                          </div>
                          <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
                            <div className="text-violet-950">5</div>
                            <div className="flex-auto">애니크라듀오시럽</div>
                            <div>3.5</div>
                            <div>3</div>
                            <div>2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2.5 self-end px-1.5 py-1 mt-12 mr-8 text-xs font-medium whitespace-nowrap bg-white rounded border border-solid border-black border-opacity-30 text-black text-opacity-60 max-md:mt-10 max-md:mr-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a05323eeb2ae3be6c50553eb8ff621d7196549749793744e081d9e503306b?apiKey=bfe5da7f1cdd4f0cbcd10436e75512b7&"
                      className="aspect-[1.23] stroke-[2px] stroke-black stroke-opacity-70 w-[21px]"
                    />
                    <div className="grow my-auto">처방전 전송</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-3 pt-4 pb-12 mx-auto w-full bg-white rounded-xl border border-solid shadow-md backdrop-blur-[5px] border-black border-opacity-30 max-md:mt-7">
                <div className="flex flex-col w-full bg-white">
                  <div className="flex gap-5 justify-between pr-20 max-md:pr-5">
                    <div className="flex flex-col">
                      <div className="text-lg font-medium whitespace-nowrap text-stone-900">
                        환자 정보
                      </div>
                      <div className="flex flex-col px-5 mt-4 text-sm text-neutral-500 max-md:pl-5">
                        <div>이름</div>
                        <div className="mt-5">ID </div>
                        <div className="mt-5">나이 </div>
                      </div>
                    </div>
                    <div className="flex flex-col self-end mt-8 text-sm font-medium whitespace-nowrap text-neutral-700">
                      <div>이지윤</div>
                      <div className="mt-5">123456</div>
                      <div className="mt-5">23세</div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between self-end mt-4 mr-6 text-sm max-md:mr-2.5">
                    <div className="text-neutral-500">연결 보호자</div>
                    <div className="flex-auto font-medium text-neutral-700">
                      이지훈
                    </div>
                  </div>
                </div>
                <div className="shrink-0 mt-3 h-px bg-gray-200" />
                <div className="flex gap-5 justify-between pr-20 mt-4 bg-white max-md:pr-5">
                  <div className="flex flex-col">
                    <div className="text-lg font-medium whitespace-nowrap text-stone-900">
                      기본 정보
                    </div>
                    <div className="flex flex-col mt-6 text-sm text-neutral-500">
                      <div>키 </div>
                      <div className="mt-5">몸무게 </div>
                      <div className="mt-5">혈액형 </div>
                    </div>
                  </div>
                  <div className="flex flex-col self-end mt-11 text-sm font-medium whitespace-nowrap text-neutral-700 max-md:mt-10">
                    <div>168 CM</div>
                    <div className="mt-6">52 kg</div>
                    <div className="mt-4">O 형</div>
                  </div>
                </div>
                <div className="shrink-0 mt-5 h-px bg-gray-200" />
                <div className="flex flex-col mt-5 bg-white">
                  <div className="text-lg font-medium text-stone-900">
                    알레르기 사항
                  </div>
                  <div className="flex flex-col mt-3.5 text-sm text-neutral-500">
                    <div>
                      25-(OH) vitamin D 25-10H) vitamin
                      <br />
                    </div>
                    <div className="mt-4">
                      지연성 알레르기 90동 1g04 1ood antib
                      <br />
                    </div>
                    <div className="mt-4 ml-3 max-md:ml-2.5">
                      1gE 소우유 Specific IgE F2(Cow's milk)
                      <br />
                    </div>{" "}
                    <div className="mt-4">
                      lgE 계란흰자 Specific lgE F1(egg white)
                      <br />
                    </div>{" "}
                    <div className="mt-4">
                      lgE 새우 Specific IgE F40(shrimp)
                      <br />
                    </div>{" "}
                    <div className="mt-4">
                      lgE 대두통 Specific Vt F18(Soybean)
                      <br />
                      <br />
                    </div>{" "}
                    <div className="mt-4">
                      lgE 아몬드 Specific NE F47(AMond)
                      <br />
                    </div>{" "}
                    <div className="mt-2.5">
                      lgE 돼지고기 Specific NE F48(Pork)
                      <br />
                    </div>
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



export default PatientRecordLayout;
