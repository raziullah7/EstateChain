using Domain.Entities;
using Infrastructure.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Properties.Queries;

public class GetPropertyList
{
    public class Query: IRequest<List<Property>> {}
    
    public class Handler(EstateChainDbContext context) : IRequestHandler<Query, List<Property>>
    {
        public async Task<List<Property>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Properties.ToListAsync(cancellationToken);
        }
    }
}