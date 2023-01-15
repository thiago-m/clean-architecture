export class SignUpController {
  handle (httpRequest: any): any {
    let notExists: string

    if (!httpRequest.body.name) notExists = 'name'
    if (!httpRequest.body.email) notExists = 'email'

    return {
      statusCode: 400,
      body: new Error(`Missing param: ${notExists}`)
    }
  }
}
