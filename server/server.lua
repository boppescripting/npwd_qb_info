local QBCore = exports['qb-core']:GetCoreObject()

QBCore.Functions.CreateCallback('npwd:infoapp:getPlayerInformation', function(source, cb)
    local src = source
    local PlayerData = QBCore.Functions.GetPlayer(src).PlayerData
    local info = {
        {
            name = 'State ID',
            description = PlayerData.citizenid
        },
        {
            name = 'Cash',
            description = PlayerData.money.bank and ('$' .. PlayerData.money.cash) or tostring(0)
        },
        {
            name = 'Bank',
            description = PlayerData.money.bank and ('$' .. PlayerData.money.bank) or tostring(0)
        },
    }
    cb(info)
end)
