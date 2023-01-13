const main = async () => {
  const getWaveContractFactory = await hre.ethers.getContractFactory("WavePortal")
  const waveContract = await getWaveContractFactory.deploy()
  await waveContract.deployed()

  console.log("contract has been deployed to:", waveContract.address) //0x06034086AcFD579d47cB49Ba54d7003ff9440002
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