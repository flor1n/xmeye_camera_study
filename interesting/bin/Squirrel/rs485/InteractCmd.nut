class InteractCmd extends RS485Base{
	// Э�����ʾ����, ������ļ���ֱ�Ӷ�Ӧ�����ܳ���16�ַ�
	Name = "InteractCmd"

	// ָ����Э�鱻��Щ�ӿں͹���ʵ�֣����������ӿ�֧�֣��ӿ����Կո�ָ�
	Type = "COMM"

	CommandLen = 8

	HeadLen = 1

	// ����ͷ����
	HeadData = [0xDD]

	// ��ַ��
	RS232Addr = 0xFF

	// �Ƿ��е�����Ϣ
	UpMsg = 0

	// �Ƿ�ͨ���ű�������0��ͨ������ 1���ű����� 2���ⲿ����
	ParseMode = 2
}

local cInteractCmd = InteractCmd();

return cInteractCmd;
