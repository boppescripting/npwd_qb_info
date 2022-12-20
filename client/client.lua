local QBCore = exports['qb-core']:GetCoreObject()

RegisterNUICallback("npwd:infoapp:getPlayerInformation", function(data, cb)
	local jobs
	local p = promise.new()
	QBCore.Functions.TriggerCallback('npwd:infoapp:getPlayerInformation', function(jobs)
		p:resolve(jobs)
	end)
	jobs = Citizen.Await(p)
    print(jobs)
	cb({ status = "ok", data = jobs })
end)