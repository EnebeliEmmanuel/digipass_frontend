import { useContractWrite, usePrepareContractWrite } from 'wagmi';


export const useContractSend = (functionName, args) => {

    const gasLimit = BigNumber.from(1000000)

    const {config} = usePrepareContractWrite({
        address,
        abi,
        functionName,
        args,
        onError: (err) => {
            console.log(err);
        }
    })

    const {data, isSuccess, write, error, isLoading} = useContractWrite(config)
    return { data, isSuccess, write, isLoading}
}