"use client";
import Image from "next/image";
// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";
import { useRef, useEffect, useState } from "react";
import { Monoton } from "next/font/google";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

const Mono = Monoton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-monoton",
});

function MeshComponent() {
  const fileUrl = "model/scene.gltf";
  const mesh = useRef("");
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default function Home() {
  const [nftc, setNfts] = useState([]);
  const addressref = useRef("");
  const [address, setAddress] = useState(
    "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
  );
  const config = {
    apiKey: "ZiO0i9U7iaI7bEcm1-wYzMfhK5OxP9sl",
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);
  const reload = () => {
    setAddress(addressref.current.value);
    addressref.current.value = "";
  };

  const main = async () => {
    // Flag to omit metadata
    const omitMetadata = false;

    // Get all NFTs
    const { nfts } = await alchemy.nft.getNftsForContract(address, {
      omitMetadata: omitMetadata,
    });

    let arr = [];
    for (let i = 0; i < nfts.length; i++) {
      const nft = nfts[i];
      arr.push([
        nft.contract.name,
        nft.rawMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/"),
      ]);
    }
    setNfts(arr);
  };

  const runMain = async () => {
    try {
      await main();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  useEffect(() => {
    runMain();
  }, [address]);

  return (
    <main>
      <div className="my-[2%] flex justify-center items-center h-[40vh]">
        <Canvas flat linear className="h-full w-l">
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <MeshComponent scale={5} />
        </Canvas>
      </div>
      <h2
        className={`text-4xl font-monoton ${Mono.variable} font-dots text-center`}
      >
        ギャラリー
      </h2>
      <h2
        className={`text-5xl font-monoton ${Mono.variable} font-dots text-center py-[4%]`}
      >
        Gallery
      </h2>
      <div class="w-[30%] transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 m-auto">
        <input
          type="text"
          placeholder="0xenter-address"
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          ref={addressref}
        />
      </div>
      <div className="m-auto py-[2%]">
        <div
          title="enter"
          className="w-[40px] h-[40px] rounded-full 
                       bg-indigo-500 hover:bg-red-500 hover:scale-110 hover:cursor-pointer text-white m-auto"
          onClick={() => reload()}
        ></div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between px-[10%] py-[5%]">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            {nftc &&
              nftc.map((nft, index) => (
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 mx-auto border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 bg-slate-900">
                    <Image
                      src={nft[1]}
                      width={200}
                      height={200}
                      className="rounded-lg w-[80%] m-auto"
                    />
                    <h2
                      title={nft[0] + " " + index}
                      className="py-[4%] text-2xl truncate ... font-dots "
                    >
                      {nft[0]}
                      {" " + index}
                    </h2>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
