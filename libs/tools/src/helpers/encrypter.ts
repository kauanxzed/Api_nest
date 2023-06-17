import * as bcrypt from 'bcrypt'

class Encrypter {
  encrypt(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }

  compare(password: string, hash: string) {
    return bcrypt.compare(password, hash)
  }
}

export default new Encrypter()
