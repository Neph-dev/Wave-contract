const main = async () => {
  const getWaveContractFactory = await hre.ethers.getContractFactory("WavePortal")
  const waveContract = await getWaveContractFactory.deploy()
  await waveContract.deployed()

  console.log("contract has been deployed to:", waveContract.address) //0x5396779F1b97690FBbbC0677334132dF059e7778
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