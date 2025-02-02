interface DownloadedDataInfo {
  id: number;
  user: {
    name?: {
      first: string;
      last: string;
    }
  }
}

const data: DownloadedDataInfo = {
  id: 1,
  user: {
    name: {
      first: 'Taro',
      last: 'Yamada'
    }
  }
}

const strAry: string[] = [
  'first',
  'last'
]

// ブラケット記法 -> T[K]
type id = DownloadedDataInfo['id'];
type userName = DownloadedDataInfo['user']['name'];

// データ型の取得に際してもユニオン型で取得可能
type unionType = DownloadedDataInfo['id' | 'user'];

// 配列の中身を取得する場合
type strAryType = string[];
type aryVal1 = strAryType[0]; // 0以外を入れてもエラーにならない
type aryVal2 = strAryType[number]; // numberを指定することで配列の中身を取得できる
