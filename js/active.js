var blocks=document.querySelectorAll('ul.menu li div');//������� ��������� �����
for(var i=0;i<blocks.length;i++){//����������� �� ���� ������� ��������� 
blocks[i].onmouseover=function(){
  this.style.background='#8E44AD';
//����� ����� ������ ����� ������ �����
}
}