interface DownloadedData  {
    id: number;
    name: string;
    age?: number;
}

const downloadedData: DownloadedData = {
    id: 1,
    name: 'Alice'
};

console.log(downloadedData.age?.toString());
