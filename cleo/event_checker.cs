  G�  HM ����� �7Ee����_qA       !.\events.txt 	Event: %d   �����
FLAG   SRC x  {$CLEO .cs}
{$USE CLEO}
{$USE CLEO+}
nop

request_model 280

load_all_models_now

repeat
    wait 0
until has_model_loaded 280

int cop = create_char 6 280 2163.4861 -1700.9186 15.0859
int event

while true
    wait 0
    event = get_char_highest_priority_event cop
    log_to_file ".\events.txt" false "Event: %d" event
end

terminate_this_custom_scripth   __SBFTR 