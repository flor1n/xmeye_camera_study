class Transparent extends RS485Base{
	// Э�����ʾ����, ������ļ���ֱ�Ӷ�Ӧ�����ܳ���16�ַ�
	Name = "Transparent"
		
	//֧��485��232
	Type = "RS485 COMM"
	
	CommandLen = 6

	HeadLen = 1
	
	// ����ͷ����
	HeadData = [0xE0]
	
	// ��ַ��
	RS485Addr = 0xFF
	
	// �Ƿ��е�����Ϣ
	UpMsg = 1
	
	// �Ƿ�ͨ���ű�����
	ParseMode = 0
}

local cTransparent = Transparent();

return cTransparent;