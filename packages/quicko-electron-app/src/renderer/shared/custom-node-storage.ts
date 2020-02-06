import { LocalStorage } from 'node-localstorage'

const QUICKO_FILE_NAME = 'quicko.json'

export class CustomAsyncNodeStorage {
  private localStorage: LocalStorage

  constructor(storageDirectory: string) {
    this.localStorage = new LocalStorage(storageDirectory)
  }
  // @ts-ignore next-line
  getItem (key: string) {
    return new Promise<string>((resolve, reject) => {
      try {
        const storedValue = this.localStorage.getItem(QUICKO_FILE_NAME)
        process.nextTick(() => resolve(storedValue))
      } catch (e) {
        reject(e)
      }
    })
  }
  // @ts-ignore next-line
  setItem (key: string, value: string | number) {
    return new Promise<void>((resolve, reject) => {
      try {
        this.localStorage.setItem(QUICKO_FILE_NAME, value)
        process.nextTick(() => resolve())
      } catch (e) {
        reject(e)
      }
    })
  }
  // @ts-ignore next-line
  removeItem (key: string) {
    return new Promise<void>((resolve, reject) => {
      try {
        this.localStorage.removeItem(QUICKO_FILE_NAME)
        process.nextTick(() => resolve())
      } catch (e) {
        reject(e)
      }
    })
  }

  getAllKeys () {
    return new Promise<string[]>((resolve, reject) => {
      try {
        const keys = []
        for (let i = 0; i < this.localStorage.length; ++i) {
          // @ts-ignore next-line
          keys.push(this.localStorage.key(i))
        }
        process.nextTick(() => resolve(keys))
      } catch (e) {
        reject(e)
      }
    })
  }
}
