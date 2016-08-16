class <%= objName %>Controller {
    constructor(TranslateService) {
        this.TranslateService = TranslateService
    }
    $onInit() {
        this.msg = this.TranslateService.get('Hello');
    }
}
export default <%= objName %>Controller;
