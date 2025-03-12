// Switch 1 - Primary stats
const levelSwitch = document.getElementById('levelSwitch');
const levelSections = ['Strength', 'Agility', 'Vitality', 'Speech'];

levelSwitch.addEventListener('change', function() {
  levelSections.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Switch 2 - Combat Stats
const levelSwitch2 = document.getElementById('levelSwitch2');
const levelSections2 = ['Warfare', 'Defense', 'Axe', 'Bow', 'Mace', 'Sword', 'Unarmed'];

levelSwitch2.addEventListener('change', function() {
  levelSections2.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch2.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Switch 3 - Non-Combat Stats
const levelSwitch3 = document.getElementById('levelSwitch3');
const levelSections3 = ['Alchemy', 'Drinking', 'Herbalism', 'Horsemanship', 'Houndmaster', 'Hunting', 'Lockpicking', 'Maintenance', 'Pickpocketing', 'Reading', 'Stealth'];

levelSwitch3.addEventListener('change', function() {
  levelSections3.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch3.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Switch 4 - States
const levelSwitch4 = document.getElementById('levelSwitch4');
const levelSections4 = ['Health', 'Stamina', 'Energy', 'Nourishment'];

levelSwitch4.addEventListener('change', function() {
  levelSections4.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch4.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Switch 5 - Game mechanics /Lockpicking/Pickpocketing
const levelSwitch5 = document.getElementById('levelSwitch5');
const levelSections5 = ['NoLockpicking', 'NoPickpocketing']

levelSwitch5.addEventListener('change', function() {
  levelSections5.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch5.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Switch 6 - Wanted level
const levelSwitch6 = document.getElementById('levelSwitch6');
const levelSections6 = ['WantedLevel']

levelSwitch6.addEventListener('change', function() {
  levelSections6.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch6.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const wantedLevelInput = document.getElementById('WantedLevelInput');
    const wantedLevelText = document.getElementById('WantedLevelText');

    const wantedDescriptions = {
        0: "Not wanted",
        1: "Wanted for money",
        2: "Wanted for jail",
        3: "Wanted dead"
    };

    wantedLevelInput.addEventListener('input', function() {
        wantedLevelText.textContent = wantedDescriptions[wantedLevelInput.value];
    });
});

// Switch 7 - Regeneration
const levelSwitch7 = document.getElementById('levelSwitch7');
const levelSections7 = ['HealthRegeneration', 'StaminaRegeneration', 'ExhaustRegeneration', 'AllRegeneration']

levelSwitch7.addEventListener('change', function() {
  levelSections7.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch7.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Switch 8 - Map Reveal
const levelSwitch8 = document.getElementById('levelSwitch8');
const levelSections8 = ['MapReveal']

levelSwitch8.addEventListener('change', function() {
  levelSections8.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch8.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Switch 9 - Merchants & Stolen Items
const levelSwitch9 = document.getElementById('levelSwitch9');
const levelSections9 = ['MerchantStolenItems', 'OwnStolenItems'];

levelSwitch9.addEventListener('change', function() {
  levelSections9.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch9.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Switch 10 - Lockpicks, Money, Schnapps
const levelSwitch10 = document.getElementById('levelSwitch10');
const levelSections10 = ['SetLockpicks', 'SetMoney', 'SetSchnapps'];

levelSwitch10.addEventListener('change', function() {
  levelSections10.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch10.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// Switch 11 - Best Horse, Warhouse Set
const levelSwitch11 = document.getElementById('levelSwitch11');
const levelSections11 = ['BestHorse', 'WarhouseSet'];

levelSwitch11.addEventListener('change', function() {
  levelSections11.forEach(section => {
    const element = document.getElementById(section);
    if (levelSwitch11.checked) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
    // Funkcja zmieniająca style przycisków
    function toggleButtonState(target, action) {
      // Pobieramy wszystkie przyciski, które mają dany atrybut data-target
      const buttons = document.querySelectorAll(`button[data-target="${target}"]`);
      
      let enableButton, disableButton;
      buttons.forEach(btn => {
        if (btn.classList.contains('enable-btn')) {
          enableButton = btn;
        } else if (btn.classList.contains('disable-btn')) {
          disableButton = btn;
        }
      });
      
      if (action === 'enable') {
        // Ustawienie przycisku Enable na zielony, Disable na domyślny
        if (enableButton) {
          enableButton.classList.remove('btn-outline-secondary');
          enableButton.classList.add('btn-outline-success');
        }
        if (disableButton) {
          disableButton.classList.remove('btn-outline-danger');
          disableButton.classList.add('btn-outline-secondary');
        }
      } else {
        // Ustawienie przycisku Disable na czerwony, Enable na domyślny
        if (enableButton) {
          enableButton.classList.remove('btn-outline-success');
          enableButton.classList.add('btn-outline-secondary');
        }
        if (disableButton) {
          disableButton.classList.remove('btn-outline-secondary');
          disableButton.classList.add('btn-outline-danger');
        }
      }
    }
  
    // Dodajemy event listenery do przycisków Enable
    document.querySelectorAll('.enable-btn').forEach(button => {
      button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        toggleButtonState(target, 'enable');
      });
    });
  
    // Dodajemy event listenery do przycisków Disable
    document.querySelectorAll('.disable-btn').forEach(button => {
      button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        toggleButtonState(target, 'disable');
      });
    });
  });
  
 