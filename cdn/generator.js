document.getElementById('generateCheat').addEventListener('click', function() {
    const cheatCommands = [];
    
    // Primary Stats
    const strengthInput = document.getElementById('StrengthInput');
    if (strengthInput && strengthInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_stat_level stat:str level:${strengthInput.value}`);
    }
    const agilityInput = document.getElementById('AgilityInput');
    if (agilityInput && agilityInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_stat_level stat:agi level:${agilityInput.value}`);
    }
    const vitalityInput = document.getElementById('VitalityInput');
    if (vitalityInput && vitalityInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_stat_level stat:vit level:${vitalityInput.value}`);
    }
    const speechInput = document.getElementById('SpeechInput');
    if (speechInput && speechInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_stat_level stat:spc level:${speechInput.value}`);
    }
  

    // Combat Stats
    const warfareInput = document.getElementById('WarfareInput');
    if (warfareInput && warfareInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:warfare level:${warfareInput.value}`);
    }
    const defenseInput = document.getElementById('DefenseInput');
    if (defenseInput && defenseInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:defense level:${defenseInput.value}`);
    }
    const axeInput = document.getElementById('AxeInput');
    if (axeInput && axeInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:weapon_axe level:${axeInput.value}`);
    }
    const bowInput = document.getElementById('BowInput');
    if (bowInput && bowInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:weapon_bow level:${bowInput.value}`);
    }
    const maceInput = document.getElementById('MaceInput');
    if (maceInput && maceInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:weapon_mace level:${maceInput.value}`);
    }
    const unarmedInput = document.getElementById('UnarmedInput');
    if (unarmedInput && unarmedInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:weapon_unarmed level:${unarmedInput.value}`);
    }
    const swordInput = document.getElementById('SwordInput');
    if (swordInput && swordInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:weapon_sword level:${swordInput.value}`);
    }


    // Non-Combat Stats
    const alchemyInput = document.getElementById('AlchemyInput');
    if (alchemyInput && alchemyInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:alchemy level:${alchemyInput.value}`);
    }
    const drinkingInput = document.getElementById('DrinkingInput');
    if (drinkingInput && drinkingInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:drinking level:${drinkingInput.value}`);
    }
    const herbalismInput = document.getElementById('HerbalismInput');
    if (herbalismInput && herbalismInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:herbalism level:${herbalismInput.value}`);
    }
    const horsemanshipInput = document.getElementById('HorsemanshipInput');
    if (horsemanshipInput && horsemanshipInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:horse_riding level:${horsemanshipInput.value}`);
    }
    const huntingInput = document.getElementById('HuntingInput');
    if (huntingInput && huntingInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:hunter level:${huntingInput.value}`);
    }
    const readingInput = document.getElementById('ReadingInput');
    if (readingInput && readingInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:reading level:${readingInput.value}`);
    }
    const stealthInput = document.getElementById('StealthInput');
    if (stealthInput && stealthInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:stealth level:${stealthInput.value}`);
    }
    const houndmasterInput = document.getElementById('houndmasterInput');
    if (houndmasterInput && houndmasterInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:houndmaster level:${houndmasterInput.value}`);
    }
    const lockpickingInput = document.getElementById('LockpickingInput');
    if (lockpickingInput && lockpickingInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:lockpicking level:${lockpickingInput.value}`);
    }
    const pickpocketingInput = document.getElementById('PickpocketingInput');
    if (pickpocketingInput && pickpocketingInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:pickpocketing level:${pickpocketingInput.value}`);
    }
    const maintenanceInput = document.getElementById('MaintenanceInput');
    if (maintenanceInput && maintenanceInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_skill_level skill:repairing level:${maintenanceInput.value}`);
    }

    // States
    const healthInput = document.getElementById('HealthInput');
    if (healthInput && healthInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_state state:health value:${healthInput.value}`);
    }
    const staminaInput = document.getElementById('StaminaInput');
    if (staminaInput && staminaInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_state state:stamina value:${staminaInput.value}`);
    }
    const exhaustInput = document.getElementById('ExhaustInput');
    if (exhaustInput && exhaustInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_state state:exhaust value:${exhaustInput.value}`);
    }
    const hungerInput = document.getElementById('HungerInput');
    if (hungerInput && hungerInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_state state:hunger value:${hungerInput.value}`);
    }

    // Thieving settings
    const noLockpickingEnableBtn = document.querySelector('button.disable-btn[data-target="NoLockpicking"]');
    if (noLockpickingEnableBtn && noLockpickingEnableBtn.classList.contains('btn-outline-danger')) {
    cheatCommands.push(`cheat_no_lockpicking`);
    }
    const noPickpocketingEnableBtn = document.querySelector('button.disable-btn[data-target="noPickpocketing"]');
    if (noPickpocketingEnableBtn && noPickpocketingEnableBtn.classList.contains('btn-outline-danger')) {
    cheatCommands.push(`cheat_no_pickpocketing`);
    }

    // Wanted Settings
    const wantedLevelInput = document.getElementById('WantedLevelInput');
    if (wantedLevelInput && wantedLevelInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_wanted_level level:${wantedLevelInput.value}`);
    }

    // Regeneration Settings
    const healthRegenInput = document.getElementById('HealthRegenInput');
    if (healthRegenInput && healthRegenInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_regen enable:true state:health amount:${healthRegenInput.value}`);
    }
    const staminaRegenInput = document.getElementById('StaminaRegenInput');
    if (staminaRegenInput && staminaRegenInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_regen enable:true state:stamina amount:${staminaRegenInput.value}`);
    }
    const exhaustRegenInput = document.getElementById('ExhaustRegenInput');
    if (exhaustRegenInput && exhaustRegenInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_regen enable:true state:exhaust amount:${exhaustRegenInput.value}`);
    }
    const allRegenInput = document.getElementById('AllRegenInput');
    if (allRegenInput && allRegenInput.value.trim() !== "") {
      cheatCommands.push(`cheat_set_state state:all value:${allRegenInput.value}`);
    }
  
    // Map Settings
    const mapRevealEnableBtn = document.querySelector('button.enable-btn[data-target="MapReveal"]');
    if (mapRevealEnableBtn && mapRevealEnableBtn.classList.contains('btn-outline-success')) {
      cheatCommands.push(`cheat_reveal_map`);
    }

    // Merchants & Stolen Items
    const merchantEnableBtn = document.querySelector('button.enable-btn[data-target="MerchantStolenItems"]');
    if (merchantEnableBtn) {
      const merchantState = merchantEnableBtn.classList.contains('btn-outline-success') ? "true" : "false";
      cheatCommands.push(`cheat_set_all_merchants_fence enable:${merchantState}`);
    }
    const OwnStolenItemsEnableBtn = document.querySelector('button.enable-btn[data-target="OwnStolenItems"]');
    if (OwnStolenItemsEnableBtn && OwnStolenItemsEnableBtn.classList.contains('btn-outline-success')) {
      cheatCommands.push(`cheat_own_all_stolen_items`);
    }

    // Horse & Items
    const setLockpicksInput = document.getElementById('SetLockpicksInput');
    if (setLockpicksInput && setLockpicksInput.value.trim() !== "") {
      cheatCommands.push(`cheat_add_item id:8d76f58e-a521-4205-a7e8-9ac077eee5f0 amount:${setLockpicksInput.value}`);
    }
    const setMoneyInput = document.getElementById('SetMoneyInput');
    if (setMoneyInput && setMoneyInput.value.trim() !== "") {
      cheatCommands.push(`cheat_add_money amount:${setMoneyInput.value}`);
    }
    const setSchnappsInput = document.getElementById('SetSchnappsInput');
    if (setSchnappsInput && setSchnappsInput.value.trim() !== "") {
      cheatCommands.push(`cheat_add_item id:928463d9-e21a-4f7c-b5d3-8378ed375cd1 amount:${setSchnappsInput.value}`);
    }
    const bestHorseEnableBtn = document.querySelector('button.enable-btn[data-target="BestHorse"]');
    if (bestHorseEnableBtn && bestHorseEnableBtn.classList.contains('btn-outline-success')) {
      cheatCommands.push(`cheat_set_horse id:mrh_05`);
    }
    const warhouseSetEnableBtn = document.querySelector('button.enable-btn[data-target="WarhouseSet"]');
    if (warhouseSetEnableBtn && warhouseSetEnableBtn.classList.contains('btn-outline-success')) {
      cheatCommands.push(`cheat_add_item id:40a2b1d3-f475-a8f3-667a-075486518b8f`);
      cheatCommands.push(`cheat_add_item id:41a9ea6a-eed1-471c-754a-196d368245a6`);
      cheatCommands.push(`cheat_add_item id:42414d23-c8dc-7b1a-31e6-00644075feaa`);
      cheatCommands.push(`cheat_add_item id:42c04555-15cb-ac3a-aef4-e377a125aca5`);
      cheatCommands.push(`cheat_add_item id:44f5058a-a445-887b-d443-32fe726b528c`);
      cheatCommands.push(`cheat_add_item id:4572c66d-bdf2-fa90-def9-c6fd3e877ca9`);
      cheatCommands.push(`cheat_add_item id:485e549c-73c9-6caa-2d62-f03de0c20e91`);
      cheatCommands.push(`cheat_add_item id:4afcfba0-8899-4509-b099-c30f58e100b8`);
      cheatCommands.push(`cheat_add_item id:4bef1aa8-1d05-6ecc-7797-083fa321cf80`);
      cheatCommands.push(`cheat_add_item id:4c828be7-10e9-d339-7492-cf73f5c5ba88`);
      cheatCommands.push(`cheat_add_item id:481cfd5b-b646-1c6b-ff58-af749941cf9e`);
    }

    if (cheatCommands.length === 0) {
      alert("Nie wprowadzono żadnych wartości do wygenerowania!");
      return;
    }
  
    const cheatText = cheatCommands.join('\n');
    const blob = new Blob([cheatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cheat.txt';
    document.body.appendChild(a);
    a.click();
  
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
  