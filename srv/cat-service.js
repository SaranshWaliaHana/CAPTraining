module.exports = function (srv){
  srv.after ('READ','Books', each => {
    if(each.empRole == 'BasisConsultant'){
        each.empRole = 'Basis-BTPAdmin';
    }
  })
}