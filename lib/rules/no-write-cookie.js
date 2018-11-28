module.exports = function(context) {
  return {
    AssignmentExpression(node) {
      if(node.operator === '=' && node.left.object && node.left.object.name === 'document' && node.left.property){
        if(node.left.property.name==='cookie' || node.left.property.value==='cookie' ){
          context.report(node, '本项目配置为不允许添加cookie');
        }
      }
    }
  };
};
