import os

filepath = r'c:\Users\Kaze\Documents\NguyenNgocAnhTu-1\Module\NguyenNgocAnhTu_Egern.yaml'
if os.path.exists(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. DNS Server
    content = content.replace('"https://1.1.1.1/dns-query"', '"system"')

    # 2. Add googletagmanager
    if 'match: "googletagmanager.com"' not in content:
        content = content.replace(
            'match: "www-googletagmanager.l.google.com"\n      policy: REJECT',
            'match: "www-googletagmanager.l.google.com"\n      policy: REJECT\n  - domain_suffix:\n      match: "googletagmanager.com"\n      policy: REJECT'
        )

    # 3. Modify facebook.com/tr
    content = content.replace('match: "www.facebook.com/tr"', 'match: "facebook.com/tr"')

    # 4. Add bytedance keyword
    if 'match: "bytedance"' not in content:
        content = content.replace(
            'match: "ct.tiktok.com"\n      policy: REJECT',
            'match: "ct.tiktok.com"\n      policy: REJECT\n  - domain_keyword:\n      match: "bytedance"\n      policy: REJECT'
        )
        
    # 5. Add header rewrite for YouTube nonce
    if 'x-youtube-client-version' not in content:
        if 'header_rewrites:\n' in content:
            content = content.replace(
                'header_rewrites:\n',
                'header_rewrites:\n  - match: ^https?://www\\.youtube\\.com/youtubei/v1/player\n    header_replace:\n      x-youtube-client-version: "2.20240101.00.00"\n'
            )

    # 6. proxy renaming for AI and Gaming
    start_ai = content.find('OpenAI / ChatGPT')
    end_ai = content.find('Additional Ad Networks')
    if start_ai != -1 and end_ai != -1:
        ai_block = content[start_ai:end_ai]
        new_ai_block = ai_block.replace('policy: PROXY', 'policy: AI group')
        content = content[:start_ai] + new_ai_block + content[end_ai:]

    start_gaming = content.find('GAMING SERVICES ROUTING')
    end_gaming = content.find('scriptings:')
    if start_gaming != -1 and end_gaming != -1:
        gaming_block = content[start_gaming:end_gaming]
        new_gaming_block = gaming_block.replace('policy: PROXY', 'policy: Gaming group')
        content = content[:start_gaming] + new_gaming_block + content[end_gaming:]
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
