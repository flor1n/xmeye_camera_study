class GPS extends RS485Base{
	// Э�����ʾ����, ������ļ���ֱ�Ӷ�Ӧ�����ܳ���16�ַ�
	Name = "GPS"
		
	// ָ������̨Э�黹�Ǿ���Э�飬ʹ��"PTZ", "MATRIX"��ʾ
	Type = "COMM"
	
	CommandLen = 11
	
	// �Ƿ�ͨ���ű�����
	ParseMode = 2  //�������
	
	function ParseData(cmdBuf)
	{
		return " ";
	}
}

local cGPS = GPS();

return cGPS;