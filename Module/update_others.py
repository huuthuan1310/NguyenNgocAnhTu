import os
import re

files_to_update = {
    'Loon': r'c:\Users\Kaze\Documents\NguyenNgocAnhTu-1\Module\NguyenNgocAnhTu_Loon.plugin',
    'QX': r'c:\Users\Kaze\Documents\NguyenNgocAnhTu-1\Module\NguyenNgocAnhTu_QuantumultX.snippet',
    'Stash': r'c:\Users\Kaze\Documents\NguyenNgocAnhTu-1\Module\NguyenNgocAnhTu_Stash.stoverride'
}

for fmt, filepath in files_to_update.items():
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define the blocks
    ai_start_marker = 'OpenAI / ChatGPT'
    ai_end_marker = 'BỔ SUNG AD DOMAINS' if 'BỔ SUNG AD DOMAINS' in content else 'PHẦN 7'
    if content.find(ai_end_marker) == -1:
        ai_end_marker = 'Additional Ad Networks'
        
    gaming_start_marker = 'GAMING SERVICES ROUTING'
    gaming_end_marker = '[Script]' if fmt == 'Loon' else 'url-providers:'
    if fmt == 'QX':
        gaming_end_marker = None # End of file

    start_ai = content.find(ai_start_marker)
    end_ai = content.find(ai_end_marker) if ai_end_marker else -1
    
    if start_ai != -1 and end_ai != -1:
        ai_block = content[start_ai:end_ai]
        if fmt == 'QX':
            new_ai_block = ai_block.replace(', proxy', ', AI group')
        else:
            new_ai_block = ai_block.replace(',PROXY', ',AI group')
        content = content[:start_ai] + new_ai_block + content[end_ai:]

    start_gaming = content.find(gaming_start_marker)
    end_gaming = content.find(gaming_end_marker) if gaming_end_marker else len(content)
    
    if start_gaming != -1:
        gaming_block = content[start_gaming:end_gaming]
        if fmt == 'QX':
            new_gaming_block = gaming_block.replace(', proxy', ', Gaming group')
        else:
            new_gaming_block = gaming_block.replace(',PROXY', ',Gaming group')
        content = content[:start_gaming] + new_gaming_block + content[end_gaming:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
