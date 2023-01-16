const main = async () => {
  const getWaveContractFactory = await hre.ethers.getContractFactory("WavePortal")
  const waveContract = await getWaveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1")
  })
  await waveContract.deployed()

  console.log("contract has been deployed to:", waveContract.address)
  //0xf98921bC4b2Cf26f510651d3C3934239E4D0Bfd4 
  //0x106cd0a466370085f8Ca8a425d2920ee0f7A734a
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }
}

runMain()