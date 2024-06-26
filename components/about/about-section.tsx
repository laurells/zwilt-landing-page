import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section>
      <div className="px-14 -mt-16 slanted-both py-36 bg-[#EDEFFF] flex flex-col relative gap-16 container">
        <h1 className="max-w-2xl mx-auto text-[3.375rem] text-center tracking-tight font-bold leading-[1.185em]">
          Your one-stop marketplace for finding the talent your business needs.
        </h1>
        <div className="flex w-full">
          <div className="flex w-1/2 flex-col gap-20">
            <div className="flex flex-col gap-5 ">
              <h2 className="text-2xl font-medium">
                Find Dev and IT professionals to <br /> scale your business.
              </h2>
              <div className="grid max-w-72 gap-7 grid-cols-2">
                <div className="flex gap-4 items-center">
                  <div className="w-5 h-6 relative">
                    <Image src="/medal.png" alt="medal-image" fill />
                  </div>
                  <p>989 Skills</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-5 h-6 relative">
                    <Image src="/Vector-1.png" alt="medal-image" fill />
                  </div>
                  <p>45 Category</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-5 h-6 relative">
                    <Image src="/Vector-2.png" alt="medal-image" fill />
                  </div>
                  <p>1011 Profiles</p>
                </div>
              </div>

            </div>
            <div className="flex flex-col gap-5 ">
              <h2 className="text-2xl font-medium">
                Explore Creative individuals with a <br /> keen eye for detail.
              </h2>
              <div className="grid max-w-72 gap-7 grid-cols-2">
                <div className="flex gap-4 items-center">
                  <div className="w-5 h-6 relative">
                    <Image src="/medal.png" alt="medal-image" fill />
                  </div>
                  <p>989 Skills</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-5 h-6 relative">
                    <Image src="/Vector-1.png" alt="medal-image" fill />
                  </div>
                  <p>45 Category</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-5 h-6 relative">
                    <Image src="/Vector-2.png" alt="medal-image" fill />
                  </div>
                  <p>1011 Profiles</p>
                </div>
              </div>

            </div>
            <button className="mt-6 flex items-center gap-2 text-2xm font-medium" type="button">
                <Image
                  src="/footimage.svg"
                  alt="Person Icon"
                  width={60}
                  height={60}
                  // className="-rotate-90"
                />
                Explore More
              </button>

          </div>
          {/* <div className="absolute w-220 h-74 left-70 top-1930">

            <div className="absolute left-0 right-66.36% top-0 bottom-0 bg-[#202229] rounded-30">

              <div className="absolute w-25 h-15 left-25p top-29p bg-[#EDEFFF]"></div>

              <p className="absolute left-[39.09%] right-0 top-[36.49%] bottom-[39.19%] font-medium text-[22px] leading-[18px] text-[#202229]">Explore More</p>
            </div>
          </div> */}

          <div className="flex flex-col gap-9">
            <div className="bg-white flex gap-5 flex-col p-4 rounded-lg">
              <h2 className="text-base font-medium">IT & Development</h2>
              <div>
                <div className="gap-5  flex ">
                  <div className="flex text-center items-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/shopify.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">Shopify Developer</p>
                  </div>
                  <div className="flex text-center items-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/Magento.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">Magento Developer</p>
                  </div>

                  <div className="flex text-center items-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/datasceincist.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">Data<br></br>Scientist</p>
                  </div>
                  <div className="flex text-center items-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/wix.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">Webflow Developer</p>
                  </div>
                  <div className="flex text-center items-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/dotnet.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">Dot Net Developer</p>
                  </div>
                  <div className="flex text-center items-center  gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-2xl">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/blackvector.svg"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex gap-5 flex-col p-4 rounded-lg">
              <h2 className="text-base font-medium">IT & Development</h2>
              <div>
                <div className="gap-5 flex">
                  <div className="flex text-center items-center  gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-2xl">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/blackvector_back.svg"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex text-center items-center justify-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/figma.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">UX<br></br>Designer</p>
                  </div>

                  <div className="flex text-center items-center justify-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/photoshop.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">Graphics Designer</p>
                  </div>
                  <div className="flex text-center items-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/illustator.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">Illustration Artist</p>
                  </div>
                  <div className="flex text-center items-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/unity.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">Unreal<br></br>Engine</p>
                  </div>
                  <div className="flex text-center items-center gap-2 flex-col">
                    <div className="w-24 h-24 justify-center items-center flex bg-[#F6F6F6] rounded-full">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/ubisoft.png"
                          className="object-contain"
                          fill
                          alt="shopify"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium">Cinema<br></br>4D</p>
                  </div>
                </div>
              </div>
            </div>
            <p><b>30 more</b> to explore</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
