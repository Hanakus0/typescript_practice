interface DownloadedDataInfo {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}

const data: DownloadedDataInfo = {
  id: 1,
}

console.log(data.user?.name?.first);

const userDate = data.user ?? 'no-user';
type id = DownloadedDataInfo['id']; // ブラケット記法
