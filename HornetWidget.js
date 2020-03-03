//Greetings! This is awful code that I just spliced together in 5 minutes for a simple utility. Feel free to improve it.

Game.Win('Third-party');

Game.ObjectsById[2].minigame.toolsById[0] ={
				name:'Garden information',
				icon:3,
				desc:'-',
				descFunc:function()
				{
					var str='';
					if (Game.ObjectsById[2].minigame.freeze) str='Your garden is frozen, providing no effects.';
					else
					{
						var effs={
							cps:{n:'CpS'},
							click:{n:'cookies/click'},
							cursorCps:{n:'cursor CpS'},
							grandmaCps:{n:'grandma CpS'},
							goldenCookieGain:{n:'golden cookie gains'},
							goldenCookieFreq:{n:'golden cookie frequency'},
							goldenCookieDur:{n:'golden cookie duration'},
							goldenCookieEffDur:{n:'golden cookie effect duration'},
							wrathCookieGain:{n:'wrath cookie gains'},
							wrathCookieFreq:{n:'wrath cookie frequency'},
							wrathCookieDur:{n:'wrath cookie duration'},
							wrathCookieEffDur:{n:'wrath cookie effect duration'},
							reindeerGain:{n:'reindeer gains'},
							reindeerFreq:{n:'reindeer cookie frequency'},
							reindeerDur:{n:'reindeer cookie duration'},
							itemDrops:{n:'random drops'},
							milk:{n:'milk effects'},
							wrinklerSpawn:{n:'wrinkler spawn rate'},
							wrinklerEat:{n:'wrinkler appetite'},
							upgradeCost:{n:'upgrade costs',rev:true},
							buildingCost:{n:'building costs',rev:true},
						};
						
						var effStr='';
						for (var i in Game.ObjectsById[2].minigame.effs)
						{
							if (Game.ObjectsById[2].minigame.effs[i]!=1 && effs[i])
							{
								var amount=(Game.ObjectsById[2].minigame.effs[i]-1)*100;
								effStr+='<div style="font-size:10px;margin-left:64px;"><b>&bull; '+effs[i].n+' :</b> <span class="'+((amount*(effs[i].rev?-1:1))>0?'green':'red')+'">'+(amount>0?'+':'-')+Beautify(Math.abs(Game.ObjectsById[2].minigame.effs[i]-1)*100,2)+'%</span></div>';
							}
						}
						if (effStr=='') effStr='<div style="font-size:10px;margin-left:64px;"><b>None.</b></div>';
						str+='<div>Combined effects of all your plants :</div>'+effStr;
					}
					if (Game.ObjectsById[2].minigame.convertTimes > 0) str+='<div>You have sacrificed your garden to the hornets <span style="color:white">' + Beautify(Game.ObjectsById[2].minigame.convertTimes) + '</span> times.</div>'
					str+='<div class="line"></div>';
					str+='<img src="img/gardenTip.png" style="float:right;margin:0px 0px 8px 8px;"/><small style="line-height:100%;">&bull; You can cross-breed plants by planting them close to each other; new plants will grow in the empty tiles next to them.<br>&bull; Unlock new seeds by harvesting mature plants.<br>&bull; When you ascend, your garden plants are reset, but you keep all the seeds you\'ve unlocked.<br>&bull; Your garden has no effect and does not grow while the game is closed.</small>';
					return str;
				},
				func:function(){},
			}
