import { GET_ASSET } from "../../api/variables"
import { handleError, handleResponse } from "../../utils/reponse/response"

async function downloadAsset(requestedAsset: string, downloadedAssetName: string): Promise<void> {
  const response = await fetch(`${GET_ASSET}${requestedAsset}`)
    .then(handleResponse)
    .catch(handleError)
  try {
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = downloadedAssetName
    a.click()
    window.URL.revokeObjectURL(url)
    a.remove()
  } catch (error) {
    console.error(error)
  }
}
export default downloadAsset
